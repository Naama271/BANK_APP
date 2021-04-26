const express = require("express");
require("./DB/mongoose");
const User = require("./MODELS/user");
const Account = require("./MODELS/account");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const { sendWelcomeEmail } = require('./SRC/EMAILS/acount')
require('dotenv').config()

//test
// const data = require("./users.json");

app.use(express.json());
app.use(cors());

//test
// app.get("/api/test", async (req, res) => {
//   try {
//     res.status(201).send(data);
//   } catch (e) {
//     res.status(400).send({ error: e.message });
//   }
// });

//getting all users - WORKS
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).send(users);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

//getting all accounts - WORKS
app.get("/api/accounts", async (req, res) => {
  try {
    const accounts = await Account.find({});
    res.status(201).send(accounts);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

//get user by ID - WORKS
app.get("/api/users/:id", async (req, res) => {
  const _id = req.params.id;
  const user = await User.findById(_id);
  res.send(user);
  throw new Error("user not found");
});

//get account by ID - WORKS
app.get("/api/accounts/:id", async (req, res) => {
  // console.log(req.params);
  const _id = req.params.id;
  const account = await Account.findById(_id);
  res.send(account);
  throw new Error("user not found");
});

//adding new user - connect to model???
app.post("/api/users", async (req, res) => {

  const user = new User(req.body)
  try {
    await user.save();
    sendWelcomeEmail(user.email , user.name)
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
  // res.send("user");
  // throw new Error("user not added");
});

//deposit - WORKS
app.put("/api/deposit/:id", async (req, res) => {
  const { deposit } = req.body;
  const _id = req.params.id;
  // const account = await Account.findById(_id);
  // console.log(_id);

  try {
    const accont = await Account.findByIdAndUpdate(
      _id,
      { $inc: { cash: deposit } },
      {
        runValidators: true,
        new: true,
        useFindAndModify: false,
      }
    );
    res.status(201).send(accont);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

//withdraw - WORKS
app.put("/api/withdraw/:id", async (req, res) => {
  const { withdraw } = req.body;
  const _id = req.params.id;

  try {
    const accont = await Account.findByIdAndUpdate(
      _id,
      { $inc: { cash: -withdraw } },
      {
        runValidators: true,
        new: true,
        useFindAndModify: false,
      }
    );
    res.status(201).send(accont);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

//transfer -
app.put("/api/transfer/:id", async (req, res) => {
  const { id_receive, transfer } = req.body;
  const _id = req.params.id;

  try {
    const accont_send = await Account.findByIdAndUpdate(
      _id,
      { $inc: { cash: -transfer } },
      {
        runValidators: true,
        new: true,
        useFindAndModify: false,
      }
    );
    const accont_receive = await Account.findByIdAndUpdate(
      id_receive,
      { $inc: { cash: transfer } },
      {
        runValidators: true,
        new: true,
        useFindAndModify: false,
      }
    );
    res.status(201).send(accont_send);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.listen(port, () => {
  console.log(port);
});
