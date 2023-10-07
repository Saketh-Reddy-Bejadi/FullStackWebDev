const express = require("express");
const bookStore=express();

const database=require("./database")

bookStore.get("/",(req,res)=>{
    return res.end("<h1>Hello World!!");
});

bookStore.get("/database",(req,res)=>{
    return res.json({books:database.books});
})

bookStore.listen(3000,()=>{
    console.log("Server running on 3000");
});


