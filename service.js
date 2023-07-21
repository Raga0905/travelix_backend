import express from "express";
import mysql from "mysql";
import cors from "cors";
import nodemon from "nodemon";

const app =express();

const server = http.createserver(app);
app.use(cors({
    credentials:true,
    origin:"*"
}));
app.use(express.json());
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"6382717224",
    database:"travelix",
    port:3306
});
connection.connect((error)=>{
    if(error){
        throw error;;
    }
    else{
        console.log("MYSQL connected successfully");
    }

})
app.post("/add/destination",(request,response)=>{
    const form =request.body;
    const sqlQuery ='insert into desstinationList (destinationName,destinationImage,destinationCount)'

});
connection.query(sqlQuery,(error,request) =>{
    if(error){
        response.status(500).send(error);
    }
    else{
        response.status(200).send({
            messsage : "Destination has been created"
        })
    }
})



const port =process.env.PORT ||4000;
server.listen(port,()=>{
    console.log("Node js is running on port",port);
})