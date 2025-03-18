import { ADMIN_SIGNUP } from "../../../constants/page.js"
import Role from "../../../models/roleModels.js"
import User from "../../../models/userModel.js"
import flash from 'express-flash'
const renderSignUpPage = (req, res) => {
    res.status(200).render(ADMIN_SIGNUP, { title: 'Admin SignUp',message:'' })
}

const createAdmin =async (req, res) => {
    try {
        const { fullName,email,password} = req.body
        console.log(req.body); 
        const currentUser = await User.findOne({email})

        if(currentUser){
            return res.status(409).json({message:"User Already exist Wiht this Email"})
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
        res.status(201).json({ message: "Admin Created" })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
}

export {
    renderSignUpPage,
    createAdmin
}