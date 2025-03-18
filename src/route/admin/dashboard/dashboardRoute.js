import express from "express";
import { BASEURL } from "../../../constants/api.js";
import { renderDashboard } from "../../../controllers/Admin/Dashboard/dashboardController.js";
const route = express.Router()

route.get(BASEURL,renderDashboard)

export default route