const http =require("http");
const fs = require("fs");

const PORT = 3000

const server = http.createServer((req, res) => {
    //Request handler goes here

    //Content with plain text format
    if (req.url === "/"){
        res.writeHead(200, {
            "Content-Type": "text/plain",
        });
        res.end("Ini adalah halaman utama dengan content type plain text.");
    }

    // Content with JSON format

    else if(req.url === "/contacts"){
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        
        let contacts = JSON.stringify([
            {name: "Tria Wulandari", phone: "0877777777"},
            {name: "Cantika", phone: "08777709997"},
            {name: "JOKIIIJAJ", phone: "087777700777"},
        ]);

        res.end(contacts);
    }

    //Content With HTML Format
    else if (req.url === "/about") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        })

        res.end("<h1>Ini Halaman about, dengan tipe konten HTML");
    }

    //Content with HTML file
    else if (req.url === "/products"){
    fs.readFile("./public/index.html", (err, data) => {
        if(err){
            res.writeHead(404);
            res.write("Halaman ini tidak ditemukan");
        } else {
          res.writeHead(200);
          res.end(data);
        }
    })
    }
})

server.listen(PORT, () => {
    console.log('server is running on port ${port}');
});
