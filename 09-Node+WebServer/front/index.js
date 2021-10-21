const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    sendUserInfoToServer();
});

function userInputData() {
  const userName = document.getElementById("nameInput").value;
  let userAge = document.getElementById("ageInput").value;
  userAge=Number(userAge);
  const userAbbilities =
    document.getElementById("abbInput").value;
  const userSoldier = document.getElementById("soldierInput").value;
  return {
    name: userName,
    age: userAge,
    abbilities: userAbbilities,
    soldier: userSoldier,
  };
}

async function sendUserInfoToServer() {
    const resultDiv = document.getElementById("resultDiv")
try {
    let body = userInputData();
    const corsHeader = { "Access-Control-Allow-Headers": "*" };
    const signInRequest = await axios.put(
      "http://localhost:8085/",
      {
          body
      },
      {headers:
          corsHeader}
    );
    
     if(signInRequest.data.includes("welcome")){
         console.log("you in")
         const h1=document.createElement("h1");
         h1.innerHTML="Welcome to Cyber4s"
         resultDiv.append(h1);
     }else{
        const h1=document.createElement("h1");
        h1.innerHTML="Sorry , youre are not for Cyber4s"
        resultDiv.append(h1);
     }
     
} catch (error) {
    console.log(error);
}
 
}
userInputData();



function checkName(name){
    if(name.toLowerCase()==="ang" ||
    name.toLowerCase()==="momo" ||
    name.toLowerCase()==="appa" ||
    name.toLowerCase()==="nina" ||
    name.toLowerCase()==="superman" ||
    name.toLowerCase()==="robinhood" 
    ){
        return("invaild name")
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

