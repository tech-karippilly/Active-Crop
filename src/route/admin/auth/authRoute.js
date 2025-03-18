import express from 'express'
import { SIGNUP, SIGNUP_PAGE } from '../../../constants/api.js'
import { createAdmin, renderSignUpPage } from '../../../controllers/Admin/Auth/authController.js'

const route = express.Router()

route.get(SIGNUP_PAGE,renderSignUpPage)
route.post(SIGNUP,createAdmin)

export default route