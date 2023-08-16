const sp = require('http');
// console.log(sp);

const server = sp.createServer((req,res)=>{
        if(req.url=='/')
        {
            res.write(`<h1>heading one</h1>`);
            res.end();
        }
        else{
            res.write("<h1>Node Server is not Working at All </h1>");
            res.end();
        }

});

server.listen(8081,()=>{
    console.log("server is running");
});



