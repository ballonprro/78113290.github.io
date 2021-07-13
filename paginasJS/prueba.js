const storageref = firebase.storage().ref();
const baseDeDatos = firebase.firestore();

var fichero = document.getElementById("archivo");

const obteniendoImagenes = (unaFuncionx) => {baseDeDatos.collection("imagenes").onSnapshot(unaFuncionx);
 }

mostrarImagenesDeFirebase();

function mostrarImagenesDeFirebase()
{
    obteniendoImagenes(
        (listaDeImagenes) =>
        (
            listaDeImagenes.forEach(
                (imagen) => {
                    document.getElementById("imagenes-firebase").innerHTML = `<img class="img_thumbnail" src="`+ imagen.data().ruta+`/>`;
                }
            )
        )
    )
}

fichero.addEventListener('change', subirImagenAFirebase);

function registrarEnBaseDeDatos(paramNombre,paramRuta)
{
    alert("")
    baseDeDatos.collection("imagenes").doc().set(
        {
            nombre:paramNombre,
            ruta:paramRuta
        }
    )
}

function subirImagenAFirebase(){
    var imagenASubir = fichero.files[0];
    console.log(imagenASubir);

    storageref.child(imagenASubir.name).put(imagenASubir).then(function
    (snapshot) {
        alert('eje')
    });

    // storageref.child(imagenASubir.name).put(imagenASubir).then(
        
    //     function (){
    //         alert("AR sub")
    //     }
    // );

    var tarea = storageref.child(imagenASubir.name).put(imagenASubir);

    tarea.on('state_changed',
     function (estado)
     {
         var progreso = (estado.bytesTransferred/estado.totalBytes)*100;
         console.log('Upload is' + progreso + '% done');
     }
     ,

     function (error){
         alert("Nose puede subir esta imagen")

     }, 
     
     function()
     {
    
    tarea.snapshot.ref.getDownloadURL().then(function(ruta) {
        registrarEnBaseDeDatos(imagenASubir.name, ruta);
     });
    
    }
)
};