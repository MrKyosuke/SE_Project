//HTML elements yang digunakan sebagai button dan input form
const editBtn = document.getElementById('edit-btn');
const saveBtn = document.getElementById('save-btn');
const editForm = document.getElementById('edit-form');
const nameDisplay = document.querySelector('h2');
const nameInput = document.getElementById('name-input');
const ageDisplay = document.querySelector('p:nth-of-type(1)');
const ageInput = document.getElementById('age-input');
const locationDisplay = document.querySelector('p:nth-of-type(2)');
const locationInput = document.getElementById('location-input');
const occupationDisplay = document.querySelector('p:nth-of-type(3)');
const occupationInput = document.getElementById('occupation-input');
const aboutDisplay = document.querySelector('p:nth-of-type(4)');
const aboutInput = document.getElementById('about-input');

/*Function untuk melakukan directory dari page Home menuju StreetView Page */
function redirectToHome() {
  window.location.href = "profile.html";
}

function redirectToCampus() {
  window.location.href = "campus.html";
}

function redirectToInformation() {
  window.location.href = "information.html";
}

function redirectToVirtualView() {
  window.location.href = "virtualV.html";
}


/*Function untuk melakukan directory dari page Home menuju Binusmaya (Old) Page */
var imageDirectoryButton = document.querySelector('.image-directory-button');
imageDirectoryButton.addEventListener('click', redirectToImageDirectory);

function redirectToImageDirectory() {
  window.location.href = "https://binusmaya.binus.ac.id/newDefault/login.html";
}

  
// Funtion untuk meng-edit data yang telah dimasukan
editBtn.addEventListener('click', function() {
  nameInput.value = nameDisplay.innerText;
  ageInput.value = ageDisplay.innerText.replace('Age: ', '');
  locationInput.value = locationDisplay.innerText.replace('Location: ', '');
  occupationInput.value = occupationDisplay.innerText.replace('Major: ', '');
  aboutInput.value = aboutDisplay.innerText.replace('About Me: ', '');
  editForm.classList.remove('hidden');
});

// Function untuk dapat menyimpan data yang telah diedit
saveBtn.addEventListener('click', function() {
  nameDisplay.innerText = nameInput.value;
  ageDisplay.innerText = 'Age: ' + ageInput.value;
  locationDisplay.innerText = 'Location: ' + locationInput.value;
  occupationDisplay.innerText = 'Major: ' + occupationInput.value;
  aboutDisplay.innerText = 'About Me: ' + aboutInput.value;
  editForm.classList.add('hidden');
});
