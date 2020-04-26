const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const terser = require('gulp-terser');
const cleanCSS = require('gulp-clean-css');

gulp.task('imageMin', () =>
    gulp.src('assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

function es(){
    return gulp.src('assets/scripts/*.js')
      .pipe(terser())
      .pipe(gulp.dest('dist/js'))
  }
  
  gulp.task('minify', es);

  gulp.task('minify-css', () => {
    return gulp.src('assets/styles/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist/styles'));
  });

gulp.task('default',gulp.parallel(['imageMin','minify','minify-css']));