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

  function redirectToPageAnggrek() {
    window.location.href = "view(A).html";
}

function redirectToPageSyahdan() {
    window.location.href = "view(S).html";
}

function redirectToPageKijang() {
    window.location.href = "view(K).html";
}

/*Function untuk melakukan directory dari page Home menuju Binusmaya (Old) Page */
var imageDirectoryButton = document.querySelector('.image-directory-button');
imageDirectoryButton.addEventListener('click', redirectToImageDirectory);

function redirectToImageDirectory() {
  window.location.href = "https://binusmaya.binus.ac.id/newDefault/login.html";
}