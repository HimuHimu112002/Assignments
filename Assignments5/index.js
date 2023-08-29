const fs = require('fs');
const http = require('http')

// =============== requirements-> 1 HTTP Server create=============== 
let server = http.createServer(function(req, res){

    // =============== requirements-> 4 url “/” then the response home page =============== 
    // =============== requirements-> 5 url “/about” then the response about page =============== 
    // =============== requirements-> 6 url “/contact” then the response contact page =============== 
    if(req.url == "/"){
        let data = fs.readFileSync('Home.html', 'utf-8')
        res.end(data)
    }else if(req.url == "/contact"){
        let data = fs.readFileSync('Contact.html', 'utf-8')
        res.end(data)
    }else if(req.url == "/about"){
        let data = fs.readFileSync('About.html', 'utf-8')
        res.end(data)
    }


     // =============== requirements-> 7 url “/file-write” create file demo.txt =============== 
    // =============== requirements-> 8 url server response using res.end() =============== 

    
    if(req.url = "/file-write"){
        fs.writeFile('demo.txt','Hello World', function(error){
            if(error){

                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File write fail");
                res.end();
            }else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File write success");
                res.end();
            }
            
        });

    }


})

// =============== requirements-> 2 listen on port 3000 run =============== 
server.listen(3000 )

// =============== requirements-> 3 console message when the run port 3000 =============== 
console.log("listening on port 3000.")