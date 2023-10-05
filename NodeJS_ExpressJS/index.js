
// Nodejs

/*const FileSystem=require("fs");
FileSystem.rmdir("skill",function(err,reult){   //mkdir,rmdir,writeFile
    if(err) {
        console.log(err);
    }
});


const OperatingSystem=require("os");
console.log(OperatingSystem.platform());  //for name of os
console.log(OperatingSystem.arch());      //for type of os like 64 or 32-bit


const http=require("http");
http.createServer((request,response)=>{
    console.log(request.headers);
    response.end("<h1>NodeJS</h1>");
})  .listen(1211);


const http=require("http");
http.createServer((request,response)=>{
    if (request.url==="/") {
        response.end("<h1>Main</h1>");
    }
    else if(request.url==="/about"){
        response.end("<h1>About</h1>")
    }
}).listen(3000);*/



// ExpressJS
// const express=require("express");

// const noddy=express();

// noddy.use(express.json());

// noddy.get("/",(request,response)=>{
//     return response.json({data:"Hello World!"});
// });

// noddy.listen(3000,()=>{
//     console.log("Server is running at port 3000");
// });



const express=require("express");
const node=express();
// node.use(express.json())

node.get("/",(req,res)=>{
    res.end("<h1>Hello world!</h1>");
});

node.get("/about",(req,res)=>{
    res.end("<h1>About Section</h1>");
});

node.get("/b/:id",(req,res) =>{

    const students=[
        {id:1,name:"student1"},
        {id:2,name:"student2"},
        {id:3,name:"student3"},
        {id:4,name:"student4"},
        {id:5,name:"student5"},
        {id:6,name:"student6"}
    ]

    const studentID=req.params.id;
    const getStudent=students.filter((student)=> student.id==studentID);
        return res.json({data:getStudent});

})

node.listen(3200,()=>{
    console.log("Server is running at port 3200");
})


