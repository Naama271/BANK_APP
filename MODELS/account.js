const mongoose = require("mongoose");
const ObjectId = require('mongodb').ObjectID;


const Account = mongoose.model("Accounts", {
  user_id: {
    type: ObjectId,
    required: true,
  },
  cash: {
    type: Number,
    default: 0,
    required: true,
  },
  credit: {
    type: Number,
    default: 0,
    required: true,
  },
  isActive: {
    type: Boolean,
  },
  actions:{
  type: Array, 
  default: [], 
  },

});

module.exports = Account;

// const Account1 = new Account({
//     user_id: "6081c5f6e27739803c525f5d",
//     cash: 0,
//     credit: 0,
//     isActive: true,
//     actions: []  
//   });


// Account1.save().then(()=>{
//     console.log(Account1)
// }).catch((error) =>{
// console.log(error)
// })