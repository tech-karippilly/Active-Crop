import express from 'express'
import { SIGNIN, SIGNIN_PAGE, SIGNUP, SIGNUP_PAGE } from '../../../constants/api.js'
import { adminLogin, createAdmin, renderSignInPage, renderSignUpPage } from '../../../controllers/Admin/Auth/authController.js'

const route = express.Router()

route.get(SIGNUP_PAGE,renderSignUpPage)
route.post(SIGNUP,createAdmin)
route.get(SIGNIN_PAGE,renderSignInPage)
route.post(SIGNIN,adminLogin)

export default route