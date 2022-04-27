const express = require("express");

const PORT = process.env.port || 3003;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "hello from server" });
});

app.get("/users/42", (req, res) => {
  const aUser = {
    firstName: "Darth",
    lastName: "Vader",
  };
  res.json(aUser);
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
