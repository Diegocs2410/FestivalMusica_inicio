const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notificar = require('gulp-notify');
const vWebp = require('gulp-webp');
const concat = require('gulp-concat');

// Utilidades CSS

const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourceMaps = require('gulp-sourcemaps');

/* Utilidades JS */
const terser = require('gulp-terser-js');

const paths = {
    scss: 'src/scss/app.scss',
    img: 'src/img/**/*',
    jscript: 'src/js/**/*.js',
};
/* Funcion que compila sass */
function css() {
    return src(paths.scss)
        .pipe(sourceMaps.init())
        .pipe(
            sass({
                outputStyle: 'compressed',
            })
        )
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourceMaps.write('.'))
        .pipe(dest('./build/css'));
}
function js() {
    return src(paths.jscript)
        .pipe(sourceMaps.init())
        .pipe(concat('bundle.js'))
        .pipe(terser())
        .pipe(sourceMaps.write('.'))
        .pipe(dest('./build/js'));
}

/* Minificar Imagenes */
function imagenes() {
    return src(paths.img)
        .pipe(imagemin())
        .pipe(dest('./build/img'))
        .pipe(notificar({ message: 'Img Notificada' }));
}
function versionWebp() {
    return src(paths.img)
        .pipe(vWebp())
        .pipe(dest('./build/img'))
        .pipe(notificar({ message: 'Version Web Lista' }));
}
/* Escuchar por cambios  */
function watchCss() {
    watch(
        'src/scss/**/*.scss',
        css
    ); /*  un * es igual a todos los archivos y ** a todas las carpetas */
    watch(paths.jscript, js);
}

exports.default = series(
    css,
    js,

    imagenes,
    versionWebp,
    watchCss
);
