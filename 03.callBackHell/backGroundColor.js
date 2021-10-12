document.body.style.backgroundColor = "yellow";


function changeBackGroundColor(time , color , callback , reject) {
    const num = Math.floor(Math.random()*10)
    setTimeout(() => {
        if (num > 3) {
            document.body.style.backgroundColor = `${color}`;
            callback()
        }
        else {
            reject()
        }
    } , time)
}

changeBackGroundColor(500 , "green" , () => {
    changeBackGroundColor(500 , "blue" , () => {
        changeBackGroundColor(500 , "orange" , () => {
            changeBackGroundColor(500 , "black" , () => {
                changeBackGroundColor(500 , "grey" , () => {
                    changeBackGroundColor(500 , "pink" , () => {} , () => console.log("your request was rejcted😒") + "1")
                        changeBackGroundColor(500 , "white" , () => {
                    } , () => console.log("your request was rejcted😒") + "1")
                } , () => console.log("your request was rejcted😒"))
            } , () => console.log("your request was rejcted😒"))
        } , () => console.log("your request was rejcted😒"))
    } , () => console.log("your request was rejcted😒"))
} , () => console.log("your request was rejcted😒"))  
