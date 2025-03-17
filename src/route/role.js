import express from 'express'
import { CREATE_ROLE } from '../constants/api.js'
import { createRole } from '../controllers/Role/roleController.js'

const route = express.Router()


route.post(CREATE_ROLE,createRole)

export default route