async function sendRequest() {
  try {
    let inputs = {};
    inputs.name = document.getElementById("name").value;
    inputs.age = document.getElementById("age").value;
    inputs.ability = document.getElementById("ability").value;
    const response = await axios.post("http://localhost:3000", inputs);
    console.log("Request Has Sent");
    alert(response.data);
  } catch (err) {
    console.error(err);
  }
}

document.getElementById("btn").addEventListener("click", (event) => {
  event.preventDefault();
  sendRequest();
});