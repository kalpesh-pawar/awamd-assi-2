var http=require('http')
var host='127.0.0.1'
var port=8082

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    console.log("server running at "+host+':'+port)

    res.end('hi!!'+'server running at ')
}).listen(port,host)