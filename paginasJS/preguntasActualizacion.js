const llamarfirestore = firebase.firestore();

const newPregunta = document.getElementById("agregando-preg");


newPregunta.addEventListener("submit", 
   e => {
    e.preventDefault();
    const cDejacomentario = newPregunta['agrega-tu-pregunta'].value;
    
    
    console.log(cDejacomentario)
})



