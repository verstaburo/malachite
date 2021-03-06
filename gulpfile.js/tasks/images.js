const gulp = require('gulp');
const plumber = require('gulp-plumber');
const errorHandler = require('gulp-plumber-error-handler');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const changed = require('gulp-changed');

module.exports = () => (
  gulp.src('app/static/images/**/*')
  .pipe(plumber({
    errorHandler: errorHandler('Error in icons task')
  }))
  .pipe(changed('dist/assets/images'))
  .pipe(imagemin([
    imagemin.mozjpeg({
      progressive: true,
    }),
    imagemin.gifsicle(),
    imagemin.optipng(),
    imagemin.svgo(),
  ], {
    verbose: true,
  }))
  .pipe(gulp.dest('dist/assets/images'))
);
