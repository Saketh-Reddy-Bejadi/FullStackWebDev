const FileSystem=require("fs");
FileSystem.writeFile("skill.txt","C,Java,JS,Python",function(err,reult){
    if(err) {
        console.log(err);
    }
});