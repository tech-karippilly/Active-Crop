import express from 'express'
import { CATEGOERY_CREATE_PAGE, CATEGOERY_EDIT_PAGE, CATEGOERY_LIST_PAGE } from '../../../constants/api.js'
import { renderCatagoeryPage, renderCreatePage, renderEditPage } from '../../../controllers/Admin/Catagoery/catagoeryController.js'

const route = express.Router()

route.get(CATEGOERY_LIST_PAGE,renderCatagoeryPage)
route.get(CATEGOERY_CREATE_PAGE,renderCreatePage)
route.get(CATEGOERY_EDIT_PAGE,renderEditPage)

export default route