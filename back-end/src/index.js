
const express = require("express")
const morgan = require("morgan")
const cors = require("cors");
const { json } = require("express");

const app = express()

app.set('port',process.env.port || 4000);




//middleware
app.use(morgan())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())



//routes
app.use("/api",require("./routes/routes"))





app.listen(app.get('port'),()=>{
    console.log("SERVER CORRIENDO EN EL PUERTO",app.get('port'))
})