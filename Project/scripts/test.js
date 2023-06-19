function redirectToCampus() {
    window.location.href = "profile.html";
}

function redirectToVirtualView() {
    window.location.href = "view.html";
}

function redirectToImageDirectory() {
    window.location.href = "https://binusmaya.binus.ac.id/newDefault/login.html";
}

function redirectToAnotherPage() {
    window.location.href = "campus.html"; // Replace "another-page.html" with the actual file name or URL of the page you want to navigate to
  }

function showGoogleStreetView() {
    var latitude = -6.201908224456702; // Replace with the desired latitude
    var longitude = 106.7826642441278; // Replace with the desired longitude

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

function initMap() {
    var latitude = -6.201908224456702; // Replace with the desired latitude
    var longitude = 106.7826642441278; // Replace with the desired longitude

    var mapOptions = {
        center: { lat: latitude, lng: longitude },
        zoom: 12,
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

document.addEventListener("DOMContentLoaded", function () {
    var campusButton = document.querySelector(".nav-button");
    campusButton.addEventListener("click", redirectToCampus);

    var imageDirectoryButton = document.querySelector(".image-directory-button");
    imageDirectoryButton.addEventListener("click", redirectToImageDirectory);

    // Load Google Maps API and then initialize the map and street view
    var script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=&callback=initializeMap";
    script.defer = true;
    script.async = true;
    script.onload = function () {
        initMap();
        showGoogleStreetView();
    };
    document.head.appendChild(script);
});
