const http = require('http');

const PORT = 3000;

const friends = [
    {
        id : 0,
        name : "John"
    },
    {
        id : 1,
        name : "Jim"
    },
];

const server = http.createServer();

server.on('request', (req,res) => {
    const urlParts = req.url.split("/");

    const prefixForm = urlParts[1];
    const postfixForm = urlParts[2];

    res.writeHead(200,{
        "Content-Type": "application/json",
    });

    if(req.url.length === 3 && req.method === "GET") {
        res.end(
            JSON.stringify(friends.filter(el => el.id === +postfixForm))
        )
    } else if(req.method === "GET" && prefixForm === "friends") {
        res.end(JSON.stringify(friends))
    } else if(req.method === "POST" && prefixForm === "friends") {
        req.on('data', (data) => {
            friends.push(data.toString());

            req.pipe(res);
        })
    } else if(req.url === "/" && req.method === "GET"){    
        res.end(JSON.stringify({
            id: 1,
            name: "John"
        }));
    }
})

server.listen(PORT,() => {
    console.log("Server is running!");
})