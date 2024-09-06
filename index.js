const express = require("express");
const health =require('./models/health');
const app = express();
const connect = require("./connections/connect.js");
const port = 1000;
const router=require("./Routes/index.js");
data = [];
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.json());
app.use(express.urlencoded({extended:false}));

connect("mongodb://127.0.0.1:27017/health_bot")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(router)

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});


//If asked == true then don't show the submit button only show it when person is for the first time on the website