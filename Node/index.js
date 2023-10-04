const FileSystem=require("fs");
FileSystem.mkdir("skill",function(err,reult){
    if(err) {
        console.log(err);
    }
});