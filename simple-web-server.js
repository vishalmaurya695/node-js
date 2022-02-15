const http = require('http');
const port = 300;
const server = http.createServer(function(request,response){
    response.write('hello node')
    response.end()

});

server.listen(port,function(error){
    if (error){
        console.log('something went wrong');
    }
    else{
        console.log('listening on port ' + port);
    }
})
