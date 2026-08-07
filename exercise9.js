function celsuisToFahrenheit(celsuis) {
    return (celsuis * 9/5) + 32;
}
function describetemperature(fahreinheit) {
    if(fahreinheit >= 80){
        return "hot";
    } else if (fahreinheit >= 50 & fahreinheit <= 79) {
        return "mild";
    }
    else {
        return "cold";
    }
}
console.log(describetemperature(celsuisToFahrenheit(30)));