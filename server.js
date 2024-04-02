const express = require ('express')
const app = express();
const mongoose = require('mongoose')
const port = 5000;



app.use(express.json())

mongoose.connect("mongodb+srv://ahmedmasrouki697:Triangle2001@cluster0.baofk29.mongodb.net/db?retryWrites=true&w=majority&appName=Cluster0"
).then(()=>console.log("DB connected")).catch((err)=>console.log(err));

app.use("/",require('./router/createPerson'))


app.listen(port, (err) => {
    err ? console.log("error:", err) : console.log("server is running in port:", port);
});