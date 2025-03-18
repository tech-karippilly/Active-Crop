import { CATAGOERY_CREATE, CATAGOERY_LIST, CATAGOERY_UPDATE } from "../../../constants/page.js"
import Categoery from "../../../models/categoeryModel.js"
import { uploadImage } from "../../../services/cloudinary.js"

const renderCatagoeryPage = async (req,res)=>{
    res.status(200).render(CATAGOERY_LIST,{title:'Catagoery',activePage:'Catagoery'})
}

const renderCreatePage = async (req,res) =>{
    res.status(200).render(CATAGOERY_CREATE,{title:'Catagoery Create',activePage:'Catagoery'})
}

const create = async (req,res)=>{
    try{
        const {cataName,description} =req.body

        const categoery = await Categoery.findOne({catagoery_name:{$regex:cataName ,$options:'i'}})

        if (categoery){
            return res.status(409).json({message:"Categoery Name Already Exists" ,type:'warning'})
        }

        let fileName =''
        if (req.file){
            try{
                const cloudinaryResponse = await uploadImage(req.file.path, 'categories');
                fileName = cloudinaryResponse.secure_url;
            }catch(error){
                console.error("Cloudinary upload failed:", error);
                return res.status(500).json({ message: "Failed to upload image",type:'error' });
            }
        }

        const newCatagoery = new Categoery({ catagoery_name: cataName, description: description, image: fileName })

        await newCatagoery.save()
        req.session.globalMessage = { text: 'Category Created Successfully!', type: 'success' };
        res.status(201).json({message:"Category Created ...",type:'success'})
    }catch(error){
        res.status(500).json({message:'Internal Server Error',type:'error'})
    }
}

const renderEditPage = async (req,res)=>{
    res.status(200).render(CATAGOERY_UPDATE,{title:'Catagoery Edit',activePage:'Catagoery'})
}

export {
    renderCatagoeryPage,
    renderCreatePage,
    create,
    renderEditPage
}