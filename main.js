
// Variables 

let ratings = document.querySelectorAll(".rate");
let submit = document.querySelector("button");
let ratingState = document.getElementById("rating-state");
let thanksState = document.getElementById("thanks-state");
let selected = 0;


// Handle clicking on a rate :

ratings.forEach(rate => {
  rate.onclick = function(r) {
    
    // Store the selected Rate
    selected = r.target.dataset.rate;

    // Loop Over rates to change the color and the hover effect
    ratings.forEach(span => {
      span.classList.remove('active');
      if (span.dataset.rate <= selected) {
        span.classList.add('active');
        span.onmouseover = (event) => {
          ratings.forEach(s => {
            if (s.dataset.rate > event.target.dataset.rate) {
              s.classList.toggle("cancel")
            }
          })
        };
        span.onmouseout = (event) => {
          ratings.forEach(s => {
            if (s.dataset.rate > event.target.dataset.rate) {
              s.classList.toggle("cancel")
            }
          })
        };
      }
    })
    
  }
});

// Handle The submit button

submit.onclick = function(submit) {
  if (selected === 0) {
    Swal.fire(
      'Oops...',
      'You Forgot to Rate!',
      'question'
    )
  } else {
    document.querySelector(".result span").textContent = selected;
    ratingState.classList.add("hidden");
    thanksState.classList.remove("hidden");
  }
}