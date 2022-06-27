const mongoose= require('mongoose')


const shortSchema = new mongoose.Schema({
    full:{
        type: String,
        required: true
    },
    short:{
        type: String,
        required: true,
      
    }
}  
)
module.exports =  mongoose.model('shortUrl',shortSchema)