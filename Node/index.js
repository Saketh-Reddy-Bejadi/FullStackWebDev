const FileSystem=require("fs");
FileSystem.rmdir("skill",function(err,reult){
    if(err) {
        console.log(err);
    }
});