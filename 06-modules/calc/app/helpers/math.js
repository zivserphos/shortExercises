const add = (a,b) => a+b   
const sub = (n1, n2)=> n1-n2
const multiply = (n1,n2) => n1*n2 
const divide = (n1,n2) => n1/n2 
const equals = (n1, n2, callback) => {
    console.log(n1,n2)
    return callback(n1,n2)
}

export{add , sub , multiply , divide , equals}