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
// Routes
const studentRouter = require("./routes/students");

// Test Route
app.get("/", (req, res) => {
     res.send("Server is Running");
});

// Routes Use
app.use("/students", studentRouter);

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

