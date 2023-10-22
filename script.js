let obj= {
    INR : 1,
    USD :	0.012012,
    EUR : 0.011336,
    AUD : 0.019022
}
let convert = document.getElementById("convert")
let inpValue = document.getElementById("inpValue");
let outValue = document.getElementById("outValue");
let countryIn = document.getElementById("CountryInp");
let countryOut = document.getElementById("CountryOut");
let inpHead = document.getElementsById("inpHead");
let outHead = document.getElementsById("outHead");
function converts() {
    let inp = inpValue.value;
    let conIn = countryIn.value;
    let conOut = countryOut.value;
    let ans = inp / obj[conIn];
    let outans = ans * obj[conOut]
    outValue.value = outans.toFixed(2);
    // console.log(outans)
    inpHead.textContent= conIn;
    outHead.textContent = conOut;

}
