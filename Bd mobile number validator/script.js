function matchBdNumb(str) {
    let regEx = /^\+?(880|880\-|880\s|0)1[13-9]\d{8}/;
    if(regEx.test(str)) {
        return "The number is valid";
    } else {
        return "The number is invalid";
    }
}
function getInputVal() {
    let input = document.querySelector(".text").value; //getting the value from input box
    let result = matchBdNumb(input);
    alert(result);
}




