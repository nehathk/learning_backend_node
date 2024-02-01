const mongoose= require('mongoose');
// mongodb url connection
require('dotenv').config();
const mongoURL=process.env.MONGODB_URL ;
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db= mongoose.connection;

db.on('connected',()=>{
    console.log('database connected');

})
db.on('error',()=>{
    console.log('database error',err);

})
db.on('disconnected',()=>{
    console.log('database disconeected');

})
module.exports=db;