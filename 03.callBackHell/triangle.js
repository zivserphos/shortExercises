
function checkPitagoras(rib1 , rib2, rib3) {
    debugger
    if (passToOther(rib1) + passToOther(rib2) === passToOther(rib3))
        return true;
    return false;
}

function passToOther(num) {
    return sqr(num ,num)
}

function sqr(x,y){
    return x*y
}

console.log(checkPitagoras(3,4,5))