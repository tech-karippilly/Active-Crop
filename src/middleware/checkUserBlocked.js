import jwt from 'jsonwebtoken'
import { User } from '../models/index.js'
export const checkUserBlocked =async(req,res,next)=>{

    try{
        let access_token = req.session.accessToken;
        const jwtDecode = jwt.verify(access_token, process.env.JWT_SECRET_ACCESS_TOKEN);
        const userId = jwtDecode.userId;
        const currentUser = await User.findById(userId);

        if (currentUser.isBlocked){
            return res.redirect('/auth/login');
        }else{
            next()
        }

    }catch{
       
        return res.redirect('/auth/login');
    }
}