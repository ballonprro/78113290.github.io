const llamarfirestore = firebase.firestore();

const newPregunta = document.getElementById("agregandopreg");
const respuestasAleatoria = document.getElementById("repuestaAleatoria");

function guradarPregunta(preguntas, esportRespuesta1) {
    llamarfirestore.collection("preguntas&respuestas").doc().set(
        {
            preguntaUsuario: preguntas,
            respuestaEsport: esportRespuesta1
            
        }
    ) 
}

var recibirRepuesta = document.getElementById("respuestaEsport");



const obtenerPreguntas = () => llamarfirestore.collection("preguntas&respuestas").get();

const obtenerPregunta = (funcion) => llamarfirestore.collection("preguntas&respuestas").onSnapshot(funcion);

window.addEventListener("DOMContentLoaded", async (e) => {
    // const coleccpreguntas3 = await obtenerPreguntas();


    obtenerPregunta((coleccpreguntas3) => {

        repuestaAleatoria.innerHTML = ``;

        coleccpreguntas3.forEach(doc => {
            respuestasAleatoria.innerHTML = respuestasAleatoria.innerHTML + `<div id="paraCulminar" class="imprime-texto"><h3 class="imprime2-texto">` 
            + doc.data().preguntaUsuario + `</h3><p id="respuestaEsport" class="noPresenciar">`+ doc.data().esportRespuesta1 +`</p>
            </div>`

        })
        
    });


})

newPregunta.addEventListener("submit",
    async(e) => {
        e.preventDefault();
        const preguntas1 = newPregunta['titlepregunta'].value;
        const esportRespuesta = newPregunta['agregarPregunta'].value;

        await guradarPregunta(preguntas1, esportRespuesta);
        newPregunta.reset();
        newPregunta['titlepregunta'].focus();

        console.log(preguntas1, esportRespuesta);
    })

