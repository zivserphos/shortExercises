// const http = require("http")
// const db = require("./db")
// const fs = require("fs")
// const port = 5000; 
// let a =""

// const server = http.createServer((req , res) => {
//     res.writeHead(200 , "ok" , {"Content-Type": "text/html"})
//     res.writeHead(200 , "ok" , {
//         "Access-Control-Allow-Headers": "*"
//     })
//     res.write("just check")

//     req.on("data" , (data) => {
//         // for (let key in db.na) {
//         //     if (data.name === 
//         // }
//     })

//     req.on("end", (data) => {
//         res.write(a)
//         res.end()
//     })
    

     
    
// })

// server.listen(port , (err) => {
//     if(err) {
//         console.log(`Didnt manage to listen ${err}`)
//     }
//     else {
//         console.log(`server is now listen on port ${port}`)
//     }
// })


const fs = require("fs");
const http = require("http");
const db = require("./db")

const server = http
.createServer((req, res) => {
    let body =""
    res.writeHead(200,"ok",{
        "Access-Control-Allow-Headers": "*",
    });
    req.on("data",(data)=>{
        console.log(checkName("ang"))
        dataObj = JSON.parse(data.toString())
        if(!checkName(dataObj.body.name)){
            body += "name not allowed"
        }
        else if(!checkAbb(dataObj.body.abbilities)){
            body += "ability not allowed"
         }else if(!checkAge(dataObj.body.age)){
            body+= "age not allowed"
        }
        // doesnt work below fails the code 
        // else if(!checkSoldier(dataObj.body.checkSoldier)){
        //     body += "youre not a soldier"
        // }  
        else{
            body += data
            body += " youre welcome"
        }
    })
    req.on("end",()=>{
        res.write(body)
        res.end()
    })

 });
const port = 8085;
server.listen(port, () => {
  console.log("listnening to port 8085");

});

function checkName(name){
    if(name.toLowerCase()==="ang" ||
    name.toLowerCase()==="momo" ||
    name.toLowerCase()==="appa" ||
    name.toLowerCase()==="nina" ||
    name.toLowerCase()==="superman" ||
    name.toLowerCase()==="robinhood" 
    ){
        return false;
    }else{
        return true;
    }
}
function checkAge(age){
    if(age>=18 && age<=35){
        return true;
    }else{
        return("youre not in the age we are looking for")
    }
}
function checkAbb(abbilities){
    if(abbilities.toLowerCase() === "time management" ||
    abbilities.toLowerCase() === "self-motivation" ||
    abbilities.toLowerCase() === "quick learner" ||
    abbilities.toLowerCase() === "critical thinking" ||
    abbilities.toLowerCase() === "good communication" ){
        return true;
    }else{
        return("not the abbilities we wish for")
    }
}
function checkSoldier(soldier){
    if(soldier.toLowerCase() === "yes" ){
        return true;
    }else{
        return("we dont take jobniks ..")
    }
}