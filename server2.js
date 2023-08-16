const newserver = require('http');
const fs = require('fs');


const server =newserver.createServer((req,res)=>{
    if(req.url=='/')
    {

    
        fs.readFile("./public/Home.html",function(err,a){
            res.writeHead(250,{"Content-Type":"UTF-8"});
            res.end(a);
    })



}
else if (req.url=='/About'){
    fs.readFile("./public/About.html",function(err,a){
        res.writeHead(404,{"Content-Type":"UTF-8"});
        res.end(a);
    }) 
}
else if (req.url=='/Form'){
    fs.readFile("./public/Form.html",function(err,a){
        res.writeHead(404,{"Content-Type":"UTF-8"});
        res.end(a);
    }) 
}
else {
    fs.readFile("./public/error.html",function(err,a){
        res.writeHead(404,{"Content-Type":"UTF-8"});
        res.end(a);
    }) 
}

});

server.listen(8081,()=>{
    console.log("Server is running smoth")
})