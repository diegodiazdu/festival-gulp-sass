
document.addEventListener('DOMContentLoaded', function(){
    crearGaleria()
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes')

    for(let i= 1; i <= 12; i++){

        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.idImg = i;

        //click a cada imagen
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI')
        lista.appendChild(imagen)
        galeria.appendChild(lista);

    }
  }



  function mostrarImagen(e) {

      
      const id = parseInt(e.target.dataset.idImg);

      //Generar imagen
      const imagen = document.createElement('IMG')
      imagen.src = `build/img/grande/${id}.webp`;

      const overlay = document.createElement('DIV');
      overlay.appendChild(imagen);
      overlay.classList.add('overlay')

      //Boton cerrar Imganen
      const cerrar = document.createElement('P')
      cerrar.textContent = 'X'
      cerrar.classList.add('btn-cerrar')
      overlay.appendChild(cerrar)
      
      //se cierra
      
      cerrar.onclick = ()=>overlay.remove();
      overlay.onclick = ()=>overlay.remove();
      
      
     //Mostrar en HTML
     const body = document.querySelector('body');
     body.appendChild(overlay);
     body.classList.add('fijar-body');

      

    
  }