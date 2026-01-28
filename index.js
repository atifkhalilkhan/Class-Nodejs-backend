const express = require("express");
const app = express();
const port = 5000;

const dbConnect = require("./config/db");

app.use(express.json());

dbConnect()
  .then(() => {
    console.log("Database Connected Successfully");

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("Database Connection Failed");
    console.log(err.message);
  });

const studentRouter = require("./routes/students");

app.get("/", (req, res) => {
     res.send("Server is Running");
});

app.use("/students", studentRouter);

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

