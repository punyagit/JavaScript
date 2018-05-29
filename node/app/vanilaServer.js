const http = require('http');
const port = 3000;

const server = http.createServer(function(req,resp){
    console.log(req.url)
    resp.end("hello World")
})

server.listen(port,(err) => {
    if(err){
        return console.log('Error! ' + err)
    }

    console.log(`Server started on port ${port}`)
})
