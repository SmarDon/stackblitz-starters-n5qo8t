const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');

const button = document.querySelector('#button');

function runOnClick() {
  if (ageInput.value === '') {
    console.log('Vi skrev ikke inn alder');
  } else if (ageInput.value == 28) {
    console.log('Det er riktig, Stian er 28 år!');
  } else {
    console.log('"IF" eller "ELSE IF" var ikke riktig');
  }
}

function attack() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber === 1) {
    console.log('Critical Fail! You dealt ' + randomNumber + ' damage');
  } else if (randomNumber < 10) {
    console.log('You delt ' + randomNumber + ' damage');
  } else {
    console.log('Critical Success! You dealt ' + randomNumber + ' damage');
  }
}


button.addEventListener('click', runOnClick);
