var firebaseConfig = {
  apiKey: "AIzaSyAmqDZ98kMEQAZ6T4IQOa3cTNjQYEnb8NM",
  authDomain: "allaboutguineapigs-47919.firebaseapp.com",
  projectId: "allaboutguineapigs-47919",
  storageBucket: "allaboutguineapigs-47919.appspot.com",
  messagingSenderId: "865323025",
  appId: "1:865323025:web:ea41f05f0d23d89c5889b0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.GoogleAuthProvider();

document.getElementById('google-btn').addEventListener('click', function() {
  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      // The signed-in user info.
      var user = result.user;
      console.log(user);
    })
    .catch(function(error) {
      // Handle errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
});
document.getElementById('anonymous-btn').addEventListener('click', function() {
  firebase.auth().signInAnonymously()
    .then(function(result) {
      // The signed-in user info.
      var user = result.user;
      console.log(user);
    })
    .catch(function(error) {
      // Handle errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
});
// Get a reference to the sign-up form element
const signupForm = document.getElementById("signup-form");

// Handle the form submission
signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the user's email and password from the form input fields
  const email = signupForm["email"].value;
  const password = signupForm["password"].value;

  // Create the user account with Firebase
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed up successfully
      const user = userCredential.user;
      console.log("Signed up as", user.email);
    })
    .catch((error) => {
      // Handle errors here
      console.error(error);
    });
});
// Get a reference to the "Log out" button element
const logoutButton = document.getElementById("logout-button");

// Get a reference to the DOM element to display the user's name
const welcomeMessage = document.getElementById("welcome-message");

// Handle the button click event
logoutButton.addEventListener("click", (event) => {
  // Sign out the user with Firebase
  firebase.auth().signOut()
    .then(() => {
      // Sign out successful
      console.log("Signed out successfully");
    })
    .catch((error) => {
      // Handle errors here
      console.error(error);
    });
});

// Update the welcome message when the user logs in
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    const displayName = user.displayName;
    if (displayName) {
      // Set the welcome message with the user's display name
      welcomeMessage.textContent = "Welcome, " + displayName + "!";
    } else {
      // Set the welcome message with the user's email address
      welcomeMessage.textContent = "Welcome, " + user.email + "!";
    }
  } else {
    // User is signed out
    welcomeMessage.textContent = "Welcome!";
  }
});
