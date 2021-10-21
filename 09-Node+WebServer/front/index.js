const buttonSubmit = document.querySelector("button")


function userInputData() {
    const userName = document.getElementsByClassName("nameInput").value;
    const userAge = document.getElementsByClassName("ageInput").value;
    const userAbbilities =
      document.getElementsByClassName("abbilitiesInput").value;
    const userSoldier = document.getElementsByClassName("soldierInput").value;
    return {
      name: userName,
      age: userAge,
      abbilities: userAbbilities,
      soldier: userSoldier,
    };
  }

  async function sendUserInfoToServer() {
    try {
        let body = userInputData();
        const corsHeader = { "Access-Control-Allow-Headers": "*" };
        const signInRequest = await axios.put(
          "http://localhost:3000/",
          {
              body
          },
          {headers:
              corsHeader}
        );
         console.log(signInRequest);
    } catch (error) {
        console.log(error);
    }
    }

sendUserInfoToServer()