const db = firebase.firestore();
const taskForm = document.getElementById("task-form");
const taskContainer = document.getElementById("task-container");
function saveTask(titulo, noticias)
{
    db.collection("Noticias").doc().set(
        {
            title: titulo,
            description: noticias,
        }
    )
}
const getTasks = () => db.collection("Noticias").get();
const obteeniendonoticias = (notic) => db.collection("Noticias").onSnapshot(notic);
window.addEventListener("DOMContentLoaded", async(e) => {
    const obtenComent = await getTasks();
    obteeniendonoticias((obtenComent) => {
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
        const comTitulo = taskForm['task-title'].value;
        const comNoticias = taskForm['task-description'].value;
        await saveTask(comTitulo, comNoticias)
        taskForm.reset();
        taskForm['task-title'].focus();
        console.log(comTitulo,comNoticias);
    }
)
