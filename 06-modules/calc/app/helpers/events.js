const handleClicks = ((event) => {
    console.log("2")
})

Array.from(document.querySelectorAll("button")).forEach((button) => button.addEventListener(onclick , "handleClick(event)"))

export {handleClicks}