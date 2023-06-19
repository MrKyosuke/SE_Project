function showGoogleStreetView() {
    var latitude = -6.2004220178586085; // Replace with the desired latitude
    var longitude = 106.78642428432146; // Replace with the desired longitude
  
    var streetViewElement = document.getElementById("street-view");
    streetViewElement.style.width = "100%";
    streetViewElement.style.height = "400px";
    streetViewElement.style.position = "relative";
  
    var panorama = new google.maps.StreetViewPanorama(streetViewElement, {
        position: { lat: latitude, lng: longitude },
        pov: { heading: 165, pitch: 0 },
        zoom: 1,
    });
  }
  
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
    
    /*Function untuk melakukan directory dari page Home menuju Binusmaya (Old) Page */
    var imageDirectoryButton = document.querySelector('.image-directory-button');
    imageDirectoryButton.addEventListener('click', redirectToImageDirectory);
    
    function redirectToImageDirectory() {
      window.location.href = "https://binusmaya.binus.ac.id/newDefault/login.html";
    }