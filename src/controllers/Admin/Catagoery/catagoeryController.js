import { CATAGOERY_CREATE, CATAGOERY_LIST, CATAGOERY_UPDATE } from "../../../constants/page.js"

const renderCatagoeryPage = async (req,res)=>{
    res.status(200).render(CATAGOERY_LIST,{title:'Catagoery',activePage:'Catagoery'})
}

const renderCreatePage = async (req,res) =>{
    res.status(200).render(CATAGOERY_CREATE,{title:'Catagoery Create',activePage:'Catagoery'})
}

const renderEditPage = async (req,res)=>{
    res.status(200).render(CATAGOERY_UPDATE,{title:'Catagoery Edit',activePage:'Catagoery'})
}

export {
    renderCatagoeryPage,
    renderCreatePage,
    renderEditPage
}