function enviar() {
  var email = document.getElementById("email").value
  var password = document.getElementById("password").value

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {

      var user = userCredential.user;
      alert("Registro exitoso")
      location.href = "../index.html"
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
    });
}

function iniciar() {
  var emailAcc = document.getElementById("emailAcc").value
  var passwordAcc = document.getElementById("passwordAcc").value

  firebase.auth().signInWithEmailAndPassword(emailAcc, passwordAcc)
    .then((userCredential) => {

      var user = userCredential.user;
      location.href = "../index.html"
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
    });
}

function cerrar(){
  firebase.auth().signOut()
  .then(function(){
    alert("Vuelve pronto"); 
  })
  .catch(function(error) {
    console,log("error");
  })
}