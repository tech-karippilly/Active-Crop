import express from 'express'
import { LOGOUT, SIGNIN, SIGNIN_PAGE, SIGNUP, SIGNUP_PAGE } from '../../../constants/api.js'
import { adminLogin, adminLogout, createAdmin, renderSignInPage, renderSignUpPage } from '../../../controllers/Admin/Auth/authController.js'

const route = express.Router()

route.get(SIGNUP_PAGE,renderSignUpPage)
route.post(SIGNUP,createAdmin)
route.get(SIGNIN_PAGE,renderSignInPage)
route.post(SIGNIN,adminLogin)
route.get(LOGOUT,adminLogout)

export default route