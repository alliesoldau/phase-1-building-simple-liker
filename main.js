
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.querySelectorAll(".like-glyph"); // use querySelector because it returns a node list not an HTML collection
likeButtons.forEach(button => button.addEventListener("click", heartFunction));

function heartFunction(event) {
  const heart = event.target;
  mimicServerCall()
    .then(function(){
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.className = "activated-heart";
      } else {
        heart.innerText = EMPTY_HEART;
        heart.className = "";
      }
    })
    .catch(function(error) {
      const modal = document.getElementById("modal"); // the error has id "modal"
      modal.className = ""; // get rid of the hidden class (thus making it visible)
      modal.innerText = error; // set the text of the error equal to what was returned from the mimicServer function
      setTimeout(() =>  modal.className = "hidden", 3000); // after a certain period of time, hide it again
    });
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
