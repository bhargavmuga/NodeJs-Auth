// require('dotenv').config()
// const mongoose = require('mongoose');
// exports.connectMonggose =()=>{
//     mongoose.connect(process.env.DATABASE_URL,
//     {
//         useNewUrlParser: true
//     })
//     .then((e)=>console.log("Connected to Mongodb =>> Nodejs Authentication"))
//     .catch((e)=>console.log("Not Connect Mongodb"))
// }
require('dotenv').config();
const mongoose = require('mongoose');

exports.connectMonggose = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB => Node.js Authentication"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
};