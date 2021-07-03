const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    url = req.url;
    if(url === '/' || url === '/home'){
        res.writeHead(200, {'content-type': 'text/html'})
    res.write(fs.readFileSync('./home.html'));
    res.end();
    } else if (url === '/about' || url === '/about-us'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(fs.readFileSync('./about.html'));
        res.end();
    } else if (url === '/contact'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(fs.readFileSync('./contact.html'));
        res.end();
    }else{
     res.writeHead(404, {'content-type': 'text/html'})
     res.write(fs.readFileSync('./error.html'));
    res.end();
    };
})
    server.listen(7000, () =>{
    console.log('server is running');
});
