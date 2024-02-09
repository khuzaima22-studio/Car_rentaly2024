


burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.navList')
rightNav = document.querySelector('.rightNav')


burger.addEventListener('click', function(){
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})



// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from top of the document then show the button.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";  // then hide the button
  }
}

// When the user clicks on the button, then scroll to the top of the document of html file.
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



    document.getElementById("myForm").addEventListener("submit", function (e) {
        e.preventDefault();  // prevent to reload page
      
        var formData = new FormData(document.getElementById("myForm"));
        // output as an object
        console.log(Object.fromEntries(formData));
      
        // ...or iterate through the name-value pairs
        for (var pair of formData.entries()) {
          console.log(pair[0] + ": " + pair[1]);
        }

        var myWindow=window.open('');
myWindow.document.write("<div id='hello'>Thanks for Submitting the Form<div>");
      })

    


     