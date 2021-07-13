const db = firebase.firestore();
const taskForm = document.getElementById("task-form");
const taskContainer = document.getElementById("task-container");
function saveTask(nombre, comentario)
{
    db.collection("comentarios").doc().set(
        {
            title: nombre,
            description: comentario
        }
    )
}
const getTasks = () => db.collection("comentarios").get();
const obteniendoComentarios = (coment) => db.collection("comentarios").onSnapshot(coment);
window.addEventListener("DOMContentLoaded", async(e) => {
    const obtenComent = await getTasks();
    obteniendoComentarios((obtenComent) => {
        taskContainer.innerHTML=``;
        obtenComent.forEach(doc => {
        taskContainer.innerHTML=taskContainer.innerHTML+`<div class="card card-body mt-2 boder-primary"><h3 class="h5">`+doc.data().title+ `</h3><p>`+doc.data().description+`</p>
        </div>`
        });
    });
})

taskForm.addEventListener("submit",
    async(e) => {
        e.preventDefault();
        const comNombre = taskForm['task-title'].value;
        const comComentario = taskForm['task-description'].value;
        await saveTask(comNombre, comComentario)
        taskForm.reset();
        taskForm['task-title'].focus();
        console.log(comNombre,comComentario);
    }
)
//colocar nombre de usuario de inmediato//