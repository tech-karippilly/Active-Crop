import { ADMIN_SIGNIN, ADMIN_SIGNUP } from "../../../constants/page.js"
import Role from "../../../models/roleModels.js"
import User from "../../../models/userModel.js"
import jwt from 'jsonwebtoken'
const renderSignUpPage = (req, res) => {
    res.status(200).render(ADMIN_SIGNUP, { title: 'Admin SignUp',message:'' })
}

const createAdmin =async (req, res) => {
    try {
        const { fullName,email,password} = req.body
        const currentUser = await User.findOne({email})

        if(currentUser){
            return res.status(409).json({message:'Email Already exists',type:'warning'}) 
        }
        const AdminRole = await Role.findOne({roleName:'Admin'})

        const newUser =  new User({
            fullName,
            email,
            password,
            isVerifyed:true,
            role:AdminRole._id
        })
        await newUser.save()
        req.session.globalMessage = { text: 'Admin Created Successfully!', type: 'success' };

        res.status(201).json({message:'Admin Created',type:'success',redirect:'/admin/auth/signin-page'}) 
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:'Internal Server Error',type:'error'}) 
    }
}

const renderSignInPage = async (req,res)=>{
    res.status(200).render(ADMIN_SIGNIN,{title:'Admin Signin',message:''})
}

const adminLogin = async (req,res) =>{
    try{
        const {email,password} = req.body
        const currentUser = await User.findOne({email})

        if (!currentUser){
            return res.status(400).json({message:'User not Found', type:'warning' })
        }

        if (!currentUser.isVerifyed || currentUser.isBlocked){
            return res.status(400).json({message:'Unable to Login , Please Contact Tech Support', type:'warning' })
        }

        const isPasswordValid =  await currentUser.comparePassword(password);
        if (!isPasswordValid){
            return res.status(400).json({message:"Passwrod or Email is In valid",type:'error'})
        }

        const accessToken = jwt.sign(
            { userId: currentUser._id, email: currentUser.email, role: currentUser.role },
            process.env.JWT_SECRET_ACCESS_TOKEN,
            { expiresIn: '1m' }
        );

        const refreshToken = jwt.sign(
            { userId: currentUser._id, role: currentUser.role },
            process.env.JWT_SECRET_REFRESH_TOKEN,
            { expiresIn: '1d', algorithm: 'HS256' }
        );

        req.session.accessToken = accessToken;
        req.session.refreshToken = refreshToken;
        
        req.session.globalMessage = { text: 'Login Successfully!', type: 'success' };

        res.status(200).json({message:"Login Successfull ..." ,type:'success',redirect:'/admin/'})
    }catch(error){
        console.log(error)
        res.status(500).json({message:"Internal Server Error" , type:'error'})
    }
}

export {
    renderSignUpPage,
    createAdmin,
    renderSignInPage,
    adminLogin
}