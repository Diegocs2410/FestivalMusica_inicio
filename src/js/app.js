document.addEventListener('DOMContentLoaded', () => {
    scrollNav();
    navegacionFija();
});

const scrollNav = () => {
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach((enl) => {
        enl.addEventListener('click', function (e) {
            e.preventDefault();
            const seccion = document.querySelector(
                e.target.attributes.href.value
            );
            seccion.scrollIntoView({
                behavior: 'smooth',
            });
        });
    });
};

const navegacionFija = () => {
    const barra = document.querySelector('.header');
    const observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
            barra.classList.remove('fijo');
        } else {
            barra.classList.add('fijo');
        }
    });
    observer.observe(document.querySelector('.video'));
};
