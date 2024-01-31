const mongoose= require('mongoose');
const menuSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true,    

    },
    price:{
        type:Number,
        require:true,
    },
    taste:{
        type:String,
        enum:["sweet","sour","spicy"],
        require: true

    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        required:true
    }

    
});
const MenuItem= mongoose.model('MenuItem',menuSchema);
module.exports= MenuItem;
//comment for testing purpose