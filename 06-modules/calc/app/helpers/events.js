import { add , sub , multiply , divide , equals } from "./math"

console.log(equals(6,4,add))
const handleClicks = ((event) => {
    let input = document.querySelector(".result")
    if (event.target.value === "Del") {
        input.value = ""
    }
    else if (event.target.value === "0" && input.value === ""){input.value = "0."}
    else if (!isNaN(event.target.value)) {
        input.value+=event.target.value
    }
    else if (event.target.value === "." && !input.value.includes(".")){input.value +="."}
    else if(event.target.value !== "=" && !isNaN(input.value.split("")[input.value.length-1])){
        input.setAttribute("data-firstNumber" , Number(input.value))
        input.value += event.target.value
        input.setAttribute("data-action" , event.target.value)
    }
    else {
        const secondNumber = input.value.split(input.dataset.firstnumber)[1].split("").splice(1).join("")
        console.log(secondNumber)
        if (input.dataset.action === "+"){input.value = add(Number(input.dataset.firstnumber),Number(secondNumber))}
        if (input.dataset.action === "-"){input.value = sub(Number(input.dataset.firstnumber),Number(secondNumber))}
        if (input.dataset.action === "X"){input.value = multiply(Number(input.dataset.firstnumber),Number(secondNumber))}
        if (input.dataset.action === "/"){input.value = divide(Number(input.dataset.firstnumber),Number(secondNumber))}
    }

    
})

function events() {
    const buttons = document.querySelectorAll('.global')
    buttons.forEach((button) => button.addEventListener('click' , (event) => handleClicks(event)))
}


export {handleClicks , events}