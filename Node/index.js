// const FileSystem=require("fs");
// FileSystem.rmdir("skill",function(err,reult){   //mkdir,rmdir,writeFile
//     if(err) {
//         console.log(err);
//     }
// });


// const OperatingSystem=require("os");
// console.log(OperatingSystem.platform());  //for name of os
// console.log(OperatingSystem.arch());      //for type of os like 64 or 32-bit



const http=require("http");
http.createServer((request,response)=>{
    console.log(request.headers);
    response.end("<h1>NodeJS</h1>");
})  .listen(1211);