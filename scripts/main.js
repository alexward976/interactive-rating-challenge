const ratingState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-you-state');

const ratings = document.getElementsByName('rating');
const ratingStateSubmit = document.getElementById('rating-state--submit');

const selectedValue = document.getElementById('selected--value');

ratingStateSubmit.addEventListener("click", () => {
    const selected = document.querySelector('input[name="rating"]:checked');

    if(!selected) {
        selectedValue.textContent = "0";
    } else {    
        selectedValue.textContent = selected.value;
    }

    ratingState.classList.toggle('hidden');
    thankYouState.classList.toggle('hidden');
})