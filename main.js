const idNumber = document.getElementById("advice-number");
const quoteText = document.querySelector(".advice-text");
const diceButton = document.querySelector(".dice");
const url = "https://api.adviceslip.com/advice";

function getAdvices() {
    fetch(url)
    .then((response) => {
    return response.json();
})
.then(data => {
    let advices = data;
    idNumber.textContent = advices.slip.id;
    quoteText.textContent = advices.slip.advice;
})

.catch(function(error) {
    console.log(error);
});
}

diceButton.addEventListener('click', getAdvices);
window.onload = getAdvices;