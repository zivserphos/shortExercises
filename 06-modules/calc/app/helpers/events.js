const handleClicks = ((event) => {
    let input = document.querySelector(".result")
    if (event.target.value === "=") {
        let operations = []
        operations.push(input.value.split("X"))
        operations[0].map((number) => {
            parseInt(number)})
        console.log(operations)
    } 

    else if (!isNaN(input.value.split("")[input.value.length-1])) {
        //console.log("22")
        input.value = event.target.value
    }
    else if (event.target.value === "." && !input.value.includes(".")) {
        input.value+="."
    }
    else if (!isNaN(event.target.value)) {
        if (event.target.value === "0" && input.value === ""){
            input.value += "0."
            return;
        }
        input.value += event.target.value
    }
    else if (event.target.value === "Del") {
        input.value = ""
    }
    
})

function events() {
    const buttons = document.querySelectorAll('.global')
    buttons.forEach((button) => button.addEventListener('click' , (event) => handleClicks(event)))
}


export {handleClicks , events}