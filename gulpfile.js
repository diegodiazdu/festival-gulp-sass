
const {series, src, dest, watch, parallel} = require('gulp');//API gulp //series
  const sass = require('gulp-dart-sass');//dependencia gulp-dar-sass
  const imagemin = require('gulp-imagemin');//dependencia gulp-imagemin
  const notify = require('gulp-notify');//dependencia gulp-notify

  const webp = require('gulp-webp');

  const concat = require('gulp-concat');

  const paths = {
    imagenes: 'src/img/**/*',
    css: 'src/SASS/app.scss',
    watch: 'src/SASS/**/*.scss',
    js: 'src/JS/**/*.js'
    
  }

  //Compilar CSS
  function css(){

    return src(paths.css)
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(dest('./build/css'))
  }
//task minificar CSS
  function minificarCSS(){

    return src(paths.css)
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(dest('./build/css'))
    .pipe(notify("CSS Minificado"))

  }

  function javascript(){

    return src(paths.js)
    .pipe(concat('bundle.js'))
    .pipe(dest('./build/js'))

  }

//Task minificar imagenes
  function imagenes() {
    return src('src/img/**/*')
    .pipe(imagemin())
    .pipe(dest('./build/img'))
    .pipe(notify("Imagen minificadas"))
    
  }
  function toWebp(){
    return src('src/img/**/*')
    .pipe(webp())
    .pipe(dest('./build/img'))
    .pipe(notify("Imagen to Webp"))

  }
//Task Watch (compilar cada ves que escuche cambios)
  function watchArchivos(){
    watch(paths.watch,css);
    watch(paths.js,javascript)
  }

  exports.css = css;
  exports.minificarCSS = minificarCSS;
  exports.imagenes = imagenes;
  exports.toWebp = toWebp;
  exports.watchArchivos = watchArchivos;

/*   exports.default = series(css,javascript, imagenes ,toWebp, watchArchivos) */
exports.default = series(javascript, watchArchivos)