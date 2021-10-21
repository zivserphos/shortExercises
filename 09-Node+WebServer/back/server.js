const http = require("http")
const db = require("./db")
const fs = require("fs")
const port = 5000; 
let zain =""

const server = http.createServer((req , res) => {
    res.writeHead(200 , "ok" , {"Content-Type": "text/html"})
    res.writeHead(200 , "ok" , {
        "Access-Control-Allow-Headers": "*"
    })
    res.write("homo")

    req.on("data" , (data) => {
        // for (let key in db.na) {
        //     if (data.name === 
        // }
    })

    req.on("end", (data) => {
        res.write(zain)
        res.end()
    })
    

     
    
})

server.listen(port , (err) => {
    if(err) {
        console.log(`Didnt manage to listen ${err}`)
    }
    else {
        console.log(`server is now listen on port ${port}`)
    }
})