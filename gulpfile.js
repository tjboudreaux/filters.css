'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
    .pipe(minifyCSS())
    .pipe(rename('./dist/filters.min.css'))
    .pipe(gulp.dest('./'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
