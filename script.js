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
        aboutUsItemPhotoButton.style.transform = "translateX(500px)";
      } else {
        aboutUsItemPhotoButton.style.transform = "translateX(0px)";
      }
    }
  