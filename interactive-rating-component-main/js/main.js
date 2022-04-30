const ratingSection = document.querySelector('#rating');
const thankyouSection = document.querySelector('#thankyou');
const ratingBtns = document.querySelectorAll('#rating-btn');
const ratingText = document.querySelector('.rating-text');
const submit = document.querySelector('#submit');

let rating = 0;

ratingBtns.forEach((ratingBtn) => {
    ratingBtn.addEventListener('click', (e) => {
        rating = e.target.innerText;
    });
});

submit.addEventListener('click', () => {
    if (rating !== 0) {
        ratingText.innerText = rating;
        ratingSection.classList.add('hidden');
        thankyouSection.classList.remove('hidden');
    } else {
        alert('Please add a rating');
    }
});
