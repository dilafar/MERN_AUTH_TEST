const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyparser.json());

const url = process.env.MONGO_URL;

const userroutes = require("./routes/user");
app.use("/user",userroutes);

mongoose.connect(url ,  {
    useNewUrlParser: true,
},()=>{
    console.log("Mongodb Started ......");
}
);



app.listen(PORT , ()=>{
            console.log(`Server connected to : ${PORT}`);
});