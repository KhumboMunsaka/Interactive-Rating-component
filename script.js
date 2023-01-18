// rating

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const rating = document.querySelectorAll('.rating');
const submitBtn = document.querySelector('.submit');
const selectedRating = document.querySelector('.selected-rating');
const review = document.querySelector('.review');
const thankYou = document.querySelector('.thank-you');
const reset = document.querySelector('.reset');

// to remove the click class
for (let i = 0; i < rating.length; i++) {
  rating[i].classList.remove('click');
}

// to add the click class
// with a nested loop to make sure that when one is clicked, only that one is clicked
for (let i = 0; i < rating.length; i++) {
  // first looping this event listener to remove all click styling
  rating[i].addEventListener('click', function () {
    for (let i = 0; i < rating.length; i++) {
      rating[i].classList.remove('click');
    }
    // adding back the stylying when one is clicked
    // to remove hover  while its being clicked. add a second class. the second class has the hover only
    rating[i].classList.remove('rating-hover');
    rating[i].classList.add('click');

    // to get the rating
    submitBtn.addEventListener('click', function () {
      review.classList.add('hidden');
      thankYou.classList.remove('hidden');
      selectedRating.textContent = `You have selected ${rating[i].textContent} out of 5`;
    });
  });
}

reset.addEventListener('click', function () {
  review.classList.remove('hidden');
  thankYou.classList.add('hidden');
});
