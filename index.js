let binInp = document.getElementById("binary");
let decInp = document.getElementById("decimal");
let massage = document.getElementById("err-msg");

decInp.addEventListener("input", () => {
    let decVal = parseInt(decInp.value);

    binInp.value = decVal.toString(2);
})

binInp.addEventListener("input", () => {
    let binVal = binInp.value;
    decInp.value = parseInt(binVal, 2)
    massage.textContent = "";
    
    if (binValidator(binVal)){
        massage.textContent = "";
    }else{
        massage.textContent = "invalid input number";
    }
})

function binValidator(num) {
    for (let i = num.length - 1; i >= 0; index--) {
        if (num[i] != "0" && num[i] != "1") {
            return false;
        }
        return true;
    }
}