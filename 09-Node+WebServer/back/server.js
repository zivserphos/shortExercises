const http = require("http")
const port = 3000;
const validStudent = require("./db")

const server = http.createServer((req, res) => {
  let body = "";
  //Headers
  res.writeHead(200, "ok", {
    "Access-Control-Allow-Headers": "*",
  });
  //When data
  req.on("data", (data) => {
    let selection = JSON.parse(data.toString());
    if (!validStudent.nameNotEqual.includes(selection.name)) {
      if (
        validStudent.minAge < selection.age &&
        validStudent.maxAge > selection.age
      ) {
        if (validStudent.ability.includes(selection.ability)) {
          body += "Welcome to Cyber4S";
        } else {
          body += "Does not Have the Right Ability";
        }
      } else {
        body += "Invalid Age";
      }
    } else {
      body += "Invalid Name";
    }
  });
  //When end
  req.on("end", () => {
    res.write(body);
    res.end();
  });
});

server.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
});

console.log(`server is listening on port ${port}`);