
const card = document.querySelector('#card')
const form = document.querySelector('#card-form')
const cardNumber = document.querySelector('#card .Number')
const cardName = document.querySelector('#card .name')
const month = document.querySelector('#card .month')
const year = document.querySelector('#card .year')
const lg = document.querySelector('#logo')
const ccv = document.querySelector('#card .CVV')
const cards = document.querySelectorAll(".cards__single");




for(let i = 1; i <= 12; i++){
    let option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    form.selectMonth.appendChild(option);
}

const currentYear = new Date().getFullYear()
for(let i = currentYear; i <= currentYear + 8; i++){
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    form.selectYear.appendChild(option);
}

form.inputNumber.addEventListener('keyup',(e)=>{
let inputValue = e.target.value;
cardNumber.textContent = inputValue;

if(inputValue == ''){
    cardNumber.textContent = '#### #### #### ####'

    lg.innerHTML = '';
}


if(inputValue == 5){
    lg.innerHTML = '';
    const img = document.createElement('img');
    img.src = '/card/img/logo-mastercard.png';
    lg.appendChild(img);
}
else if(inputValue == 4){
    lg.innerHTML = '';
    const img = document.createElement('img');
    img.src = '/card/img/logo-visa.png';
    lg.appendChild(img);
}
})
    

form.inputName.addEventListener('keyup',(e)=>{
let inputValue = e.target.value;
form.inputName.value = inputValue.replace(/[0-9]/g, '');
cardName.textContent = inputValue;


if(inputValue == ''){
    cardName.textContent = 'José da Silva Rodrigues'
}
})

form.selectMonth.addEventListener('change', (e)=>{
month.textContent = e.target.value;

})

form.selectYear.addEventListener('change',(e)=>{
    year.textContent = e.target.value.slice(2); 
})

form.inputCvv.addEventListener('keyup',(e)=>{
let inputValue = e.target.value;
form.inputCvv.value = inputValue.replace(/[a-z]/g, '');
ccv.textContent = inputValue;
})

function flipCard() {
    this.classList.toggle("flip");
  }
  cards.forEach((card) => card.addEventListener("click", flipCard));