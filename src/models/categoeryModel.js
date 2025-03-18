import mongoose from "mongoose"

const categoerySchema  =mongoose.Schema({
    catagoery_name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},
{
timestamp:true
}
)

const Categoery = mongoose.model('Categoery',categoerySchema,'Categoery')
export default Categoery