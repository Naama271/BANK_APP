const mongoose = require("mongoose");
const ObjectId = require('mongodb').ObjectID;


const User = mongoose.model("User", {
   name: {
    type: String,
    required: true,
    validate(value) {
        if (value.length < 4) {
          throw new Error("must contain at least 10 letters");
        }
      },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    validate(value) {
        const regex = /^(?:(?:(\+?972|\(\+?972\)|\+?\(972\))(?:\s|\.|-)?([1-9]\d?))|(0[23489]{1})|(0[57]{1}[0-9]))(?:\s|\.|-)?([^0\D]{1}\d{2}(?:\s|\.|-)?\d{4})$/;
        if (!value.match(regex)) {
          throw new Error("must supply valid Israeli phone number");
        }
      },
  },
  acountId: {
      type: ObjectId,
  }
});

module.exports = User;

// const user1 = new User({
//     name: 'Roei Carmel',
//     email: 'roei@gmail.com',
//     phone: '0502244115',
//     acountId: '6081f5bbfadf08060cade970',
//   });


// user1.save().then(()=>{
//     console.log(user1)
// }).catch((error) =>{
// console.log(error)
// })