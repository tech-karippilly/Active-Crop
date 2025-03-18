import { ADMIN_DASHOARD } from "../../../constants/page.js"

const renderDashboard =async (req,res)=>{
    res.status(200).render(ADMIN_DASHOARD,{title:'Dashboard',activePage:'Dashboard'})
}

export {
    renderDashboard
}