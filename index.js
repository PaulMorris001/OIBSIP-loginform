  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,  signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyA5g7WoEDpHKWor4DPcKxg1mSih0W2dIgU",
    authDomain: "formlogin-d66fa.firebaseapp.com",
    projectId: "formlogin-d66fa",
    storageBucket: "formlogin-d66fa.appspot.com",
    messagingSenderId: "575352203682",
    appId: "1:575352203682:web:431c78b8ed78e77eafaafb"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

document.getElementById("reg-btn").addEventListener("click", function(){
  document.getElementById("login-div").style.display = "none";
  document.getElementById("register-div").style.display = "inline";
});
document.getElementById("log-btn").addEventListener("click", function(){
  document.getElementById("login-div").style.display = "inline";
  document.getElementById("register-div").style.display = "none";
});

//sign in with email and password
document.getElementById("login-btn").addEventListener("click", function(){
  const loginEmail = document.getElementById("login-email").value;
  const loginPassword = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display ="inline";
    document.getElementById("login-div").style.display = "none";
    document.getElementById("result").innerHTML = "Welcome Back<br>" +loginEmail+" was login Successfully";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display ="inline";
    document.getElementById("login-div").style.display = "none";
    document.getElementById("result").innerHTML = "Sorry!<br>" +errorMessage;
  });
});

//create a new account
document.getElementById("register-btn").addEventListener("click", function(){
  const registerEmail = document.getElementById("register-email").value;
  const registerPassword = document.getElementById("register-password").value;

  createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display ="inline";
    document.getElementById("register-div").style.display = "none";
    document.getElementById("result").innerHTML = "Welcome!<br>" +registerEmail+" account was created";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display ="inline";
    document.getElementById("register-div").style.display = "none";
    document.getElementById("result").innerHTML = "Sorry!<br>" +errorMessage;
  });
});

//Logout
document.getElementById("log-out-btn").addEventListener("click", function(){
  const auth = getAuth();
  signOut(auth).then(() => {
    document.getElementById("result-box").style.display ="none";
    document.getElementById("login-div").style.display = "inline";
  }).catch((error) => {
    document.getElementById("result").innerHTML = "Sorry!<br>" +errorMessage;
    alert("An error occuried!")
  });
});
