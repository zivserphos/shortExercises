const http = require("http")
const fs = require("fs")
const port = 5000; 

const server = http.createServer((req , res) => {
    res.write("hello world!!!")
    console.log(__dirname.split("back")[0] + "front" + "f" + "index.html")
    //   fs.readFile("index.html" , (err,data) => {
    //     if (err) {
    //         res.write("404 Could not read file " + "err")
    //     }
    //     else {
    //         res.write(data)
    //     }
    // })
     res.end()
    
})

server.listen(port , (err) => {
    if(err) {
        console.log(`Didnt manage to listen ${err}`)
    }
    else {
        console.log(`server is now listen on port ${port}`)
    }
})