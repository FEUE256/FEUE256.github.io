function welcomeMessage() {
  alert('Välkommen till Nils Efvermans hemsida!');
}

// Change color animation for the blue square
var blueSquare = document.querySelector('.blue-square');
var colors = ['blue', 'green', 'purple', 'orange'];
var currentIndex = 0;
/*
setInterval(function() {
  currentIndex = (currentIndex + 1) % colors.length;
  blueSquare.style.backgroundColor = colors[currentIndex];
}, 1000); */
document.getElementById("changeColorButton").addEventListener("click", function() {
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("random_color").style.backgroundColor = randomColor;
});

document.addEventListener('DOMContentLoaded', () => {
  const ratingStars = [...document.getElementsByClassName("rating_star")];

  function executeRating(stars) {
    const starClassActive = "rating_star fas fa-star";
    const starClassInactive = "rating_star far fa-star";
    const starsLength = stars.length;

    stars.forEach((star, index) => {
      star.onclick = () => {
        if (star.className === starClassInactive) {
          for (let i = 0; i <= index; i++) {
            stars[i].className = starClassActive;
          }
        } else {
          for (let i = index; i < starsLength; i++) {
            stars[i].className = starClassInactive;
          }
        }
      };
    });
  }

  executeRating(ratingStars);
});/*
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Förhindra att formuläret skickas och sidan laddas om

  // Hämta formulärdata
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Spara användaruppgifterna i localStorage för att användas nästa gång
  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  // Gå till aldim.html efter inloggning
  window.location.href = "aldim.html";
});
*/
// Hämta sparade användaruppgifter från localStorage
var savedEmail = localStorage.getItem("userEmail");
var savedPassword = localStorage.getItem("userPassword");

// Fyll i fälten för e-postadress och lösenord om de är sparade
if (savedEmail && savedPassword) {
    document.getElementById("email").value = savedEmail;
    document.getElementById("password").value = savedPassword;
}



