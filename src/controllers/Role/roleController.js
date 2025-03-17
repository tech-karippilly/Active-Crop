import Role from "../../models/roleModels.js"

const createRole = async (req,res)=>{
    try{
        const {roleName, description} = req.body

        const existingRole  = await Role.findOne({roleName})   
        if(existingRole){
            return res.status(400).json({message:"Role Already exists "});         
        }

        const newRole = new Role({roleName,description});
        await newRole.save();
        res.status(201).json({message:"Role Created Successfully" ,role:newRole});
    }catch(error){
        res.status(500).json({ message: 'Internal server error' });
    }
}

export{
    createRole
}