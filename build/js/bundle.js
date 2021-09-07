document.addEventListener('DOMContentLoaded', () => {
    scrollNav(), navegacionFija();
});
const scrollNav = () => {
        document.querySelectorAll('.navegacion-principal a').forEach((e) => {
            e.addEventListener('click', function (e) {
                e.preventDefault();
                document
                    .querySelector(e.target.attributes.href.value)
                    .scrollIntoView({ behavior: 'smooth' });
            });
        });
    },
    navegacionFija = () => {
        const e = document.querySelector('.header');
        new IntersectionObserver(function (t) {
            t[0].isIntersecting
                ? e.classList.remove('fijo')
                : e.classList.add('fijo');
        }).observe(document.querySelector('.video'));
    };
function crearGaleria() {
    const e = document.querySelector('.galeria-imagenes');
    for (let t = 1; t <= 12; t++) {
        const n = document.createElement('img');
        (n.src = `build/img/thumb/${t}.webp`),
            (n.dataset.imagenId = t),
            (n.onclick = mostrarImagen);
        const a = document.createElement('li');
        a.appendChild(n), e.appendChild(a);
    }
}
function mostrarImagen(e) {
    const t = parseInt(e.target.dataset.imagenId),
        n = document.createElement('img');
    n.src = `build/img/grande/${t}.webp`;
    const a = document.createElement('div');
    a.appendChild(n), a.classList.add('overlay');
    const c = document.createElement('p');
    (c.textContent = 'x'),
        c.classList.add('btn-cerrar'),
        a.appendChild(c),
        c.addEventListener('click', () => a.remove()),
        (a.onclick = () => {
            a.remove(), o.classList.remove('fijar-body');
        });
    const o = document.querySelector('body');
    o.appendChild(a), o.classList.add('fijar-body');
}
document.addEventListener('DOMContentLoaded', () => {
    crearGaleria();
});
//# sourceMappingURL=bundle.js.map
