function redirectToHome() {
    window.location.href = "profile.html";
  }
  
  function redirectToVirtualView() {
      window.location.href = "virtualV.html";
    }
  
  function redirectToCampus() {
      window.location.href = "campus.html";
    }
  
  function redirectToInformation() {
      window.location.href = "information.html";
    }
  
    function redirectToPageShihlin() {
      window.location.href = "Shihlin.html";
  }
  
  function redirectToPageChatime() {
      window.location.href = "Chatime.html";
  }
  
  function redirectToPageLegend() {
      window.location.href = "Legend.html";
  }
  
  /*Function untuk melakukan directory dari page Home menuju Binusmaya (Old) Page */
  var imageDirectoryButton = document.querySelector('.image-directory-button');
  imageDirectoryButton.addEventListener('click', redirectToImageDirectory);
  
  function redirectToImageDirectory() {
    window.location.href = "https://binusmaya.binus.ac.id/newDefault/login.html";
  }