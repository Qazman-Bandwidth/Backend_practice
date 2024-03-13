const express = require("express");
const app = express();

const database = {
  users: [
    {
      id: "123",
      name: "Lukman",
      email: "lukman@gmail.com",
      password: "lukman",
      entries: 0,
      joined: new Date(),
    },

    {
      id: "124",
      name: "Kazeem",
      email: "kazeem@gmail.com",
      password: "biscuit",
      entries: 0,
      joined: new Date(),
    },
  ],
};
app.use(express.json());

const a = 2;
app.get("/", (req, res) => {
  res.json("hello");
});

app.post("/signin", (req, res) => {
  console.log(req.body);
  if (req.body.email === database.users[0].email) {
    res.json({ message: "successful signed in" });
  } else {
    res.status(400).json("invalid email or password");
  }
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.send("register");
});

app.get("/profile/:userId", (req, res) => {
  res.send("user profile");
});

app.put("/image", (req, res) => {
  res.send("user image");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000 ");
});
