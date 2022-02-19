const dice = document.getElementById('dice');
const id = document.getElementById('id');
const quote = document.getElementById('quote');

console.log(dice, id, quote);

window.addEventListener('load', getAdvice());

dice.addEventListener('click', () => {
    getAdvice();
});

async function getAdvice() {
    let response = await axios.get('	https://api.adviceslip.com/advice');

    showAdvice(response.data);
}

function showAdvice(data) {
    id.innerText = data.slip.id;
    quote.innerText = data.slip.advice;
}
