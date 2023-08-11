const express = require("express");
require("./db/config");
const User = require("./db/User");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  const user = new User(req.body);
  const result = await user.save();
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (body.req.email && body.req.password) {
    const user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ message: "No user found" });
    }
  }
});

app.listen(4000, console.log("Port is running at 4000"));
