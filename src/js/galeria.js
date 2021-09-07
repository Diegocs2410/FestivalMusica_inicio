document.addEventListener('DOMContentLoaded', () => {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('img');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;

        /* Agregar la funcion Mostrar imagen */
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('li');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(e) {
    const id = parseInt(e.target.dataset.imagenId);
    /* Generar la imagen */
    const imagen = document.createElement('img');
    imagen.src = `build/img/grande/${id}.webp`;

    const overlay = document.createElement('div');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    /* Cerrar la imagen con un boton */
    const btnCerrar = document.createElement('p');
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    overlay.appendChild(btnCerrar);

    /* Cerrar cuando demos click */
    btnCerrar.addEventListener('click', () => overlay.remove());
    /* Cuando demos click fuera tambien cierre */

    overlay.onclick = () => {
        overlay.remove();
        body.classList.remove('fijar-body');
    };

    /* Mostrar en el HTML */
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}
