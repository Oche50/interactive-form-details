let cardHolder = document.getElementById("cardholder-input");
let cardNumber = document.getElementById("cardnumber-input");
let expMonth = document.getElementById("month-input");
let expYear = document.getElementById("year-input");
let cvcNumber = document.getElementById("cvc-input");
let crdName = document.getElementById("card-name");
let crdNumber = document.getElementById("card-num");
let expDate = document.getElementById("exp-month");
let expYr = document.getElementById("exp-year");
let cvcInput = document.getElementById("cvc-num");
let holderError = document.querySelector(".cardholder-error");
let numberError = document.querySelector(".cardnumber-error");
let expMonthError = document.querySelector(".expmonth-error");
let expYearError = document.querySelector(".expyear-error");
let cvcError = document.querySelector(".cvc-error");
let button = document.querySelector(".confirm-btn");
let formContent = document.querySelector(".formdetails");
let thankSection=document.querySelector(".thankyou-section")
let thankButton = document.querySelector(".thank-you");

cardHolder.addEventListener("keyup", runEvent);
cardNumber.addEventListener("keyup", numEvent);
expMonth.addEventListener("keyup", monthEvent);
expYear.addEventListener("keyup", yearEvent);
cvcNumber.addEventListener("keyup", cvcEvent);
button.addEventListener("click", confirmbutton);
thankButton.addEventListener("click", thankbutton);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  console.log(e.target.value);
  document.getElementById("card-name").innerHTML = `<h3>${e.target.value}</h3>`;
  document.getElementById("card-name").style.fontFamily = "Space Grotesk";
  document.getElementById("card-name").innerHTML.style.fontWeight ='lighter';
}
function numEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  console.log(e.target.value);
  document.getElementById("card-num").innerHTML = `<h3>${e.target.value}</h3>`;
}
function monthEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  console.log(e.target.value);
  document.getElementById("exp-month").innerHTML = `<h3>${e.target.value}</h3>`;
}
function yearEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  console.log(e.target.value);
  document.getElementById("exp-year").innerHTML = `<h3>${e.target.value}</h3>`;
}
function cvcEvent(e) {
  console.log(`EVENT TYPE: ${+"23"}`);
  console.log(e.target.value);
  document.getElementById("cvc-num").innerHTML = `<h3>${e.target.value}</h3>`;
}

function confirmbutton(e){
    e.preventDefault();
    if(cardHolder.value===''){
      holderError.innerHTML = "<p> Please enter your name</p>";
    }
    else if(cardNumber.value===''){
      numberError.innerHTML = "<p> Please enter a number</p>";
    }
    else if(expMonth.value===''){
      expMonthError.innerHTML = "<p> can't be blank</p>";
    }
    else if(expYear.value===''){
      expYearError.innerHTML = "<p> can't be blank</p>";
      expYearError.style.position = "absolute";
      expYearError.style.left = "33.8%";
      expYearError.style.marginTop = "30px";
      expYearError.style.color='red';
      expYearError.style.fontSize = "10px";

    }
    else if(cvcNumber.value==='') {
      cvcError.innerHTML = "<p> can't be blank</p>";
      cvcError.style.marginTop = "30px";
      cvcError.style.position = "absolute";
      cvcError.style.left = "55.5%";
     
    }
    else{
        thankSection.classList.remove("hidden");
        formContent.classList.add("hidden");
       
    }
   
}

function thankbutton(){
    thankSection.classList.add("hidden");
    formContent.classList.remove("hidden");
}