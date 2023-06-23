console.log("Witam");


  // Funkcja sprawdzająca przewinięcie strony
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    let scrollToTopButton = document.getElementById("scrollToTop");

    // Pokaż przycisk po przewinięciu 20 pikseli w dół
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      scrollToTopButton.style.opacity = "1";
    } else {
      scrollToTopButton.style.opacity = "0";
    }
  }



    // Funkcja przewijająca stronę na górę
    function scrollToTop() {
      document.body.scrollTop = 0; // Dla przeglądarek nie-IE
      document.documentElement.scrollTop = 0; // Dla IE i innych przeglądarek
    }

  
    function aboutUsScrollFunction() {
      let aboutUsItemPhotoButton = document.getElementById("aboutUsItemPhoto");
  
      // Pokaż przycisk po przewinięciu 20 pikseli w dół
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        aboutUsItemPhotoButton.style.transform = "translatey(550px)";
      } else {
        aboutUsItemPhotoButton.style.transform = "translatey(0px)";
      }
    }
  

    var Button = document.getElementById('switch');
    var body = document.body;

    Button.addEventListener('click', function() {
      body.style.backgroundImage = 'none';
      var randomColor = getRandomColor();
      document.body.style.backgroundColor = randomColor;
    });

    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }


const toggle = document.getElementById('toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('change', function() {
  menu.classList.toggle('open');
});