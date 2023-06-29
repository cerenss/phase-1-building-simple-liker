// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll("li");
hearts.forEach(heart => {
  console.log(heart);
  heart.addEventListener("click", () => {
    mimicServerCall()
    .then(() => {
      if (heart.classList.contains("activated-heart")) {
        heart.textContent = `Like! ${EMPTY_HEART}`;
        heart.classList.remove("activated-heart");
      }
      else {
        heart.textContent = FULL_HEART;
        heart.classList.add("activated-heart");
      }
    })
    .catch((error) => {
      const errorContainer = document.getElementById("modal");
      errorContainer.classList.remove("hidden");
      setTimeout(() => errorContainer.classList.add("hidden"), 3000);
      const errorMsg = document.getElementById("modal-message");
      errorMsg.textContent = error;
    });
  });
}) 



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
