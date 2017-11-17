"use strict";
// process.env.DISABLE_NOTIFIER = true;

var gulp = require('gulp'),
  plumber = require('gulp-plumber'),

// STYLES
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),

// SCRIPTS
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  order = require("gulp-order"),

//HTML 
  minifyHTML = require('gulp-minify-html'),
  fileinclude = require('gulp-file-include'),
// IMAGES
// imagemin = require( 'gulp-imagemin' ),
// pngquant = require('imagemin-pngquant'),


//LIVERELOADr
  livereload = require('gulp-livereload'),
  notify = require('gulp-notify'),
  connect = require('gulp-connect'),


//SPRITES
  spritesmith = require('gulp.spritesmith');



 gulp.task('sprite', function () {
  var spriteData = gulp.src('dist/img/sprites/*.png')
    .pipe(spritesmith({
        /* this whole image path is used in css background declarations */
        imgName: '../dist/img/sprite.png',
        cssName: '../dist/css/sprite.css'
    }));
  spriteData.img.pipe(gulp.dest('img'));
  spriteData.css.pipe(gulp.dest('css'));
}); 


//sass
gulp.task('sass', function () {
  gulp.src('src/scss/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    //.pipe(sass({outputStyle: 'compact'}))
    
    .pipe(autoprefixer({
      browsers: ['last 7 versions'], 
      cascade: false
    }))

    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('dist/css/'))
    .pipe(connect.reload());
});

//js
gulp.task('js', function () {
  gulp.src('src/js/*.js')
    .pipe(plumber())
    .pipe(order([
      "jquery-3.2.1.js",
      "lightgallery.js",
      "lg-fullscreen.js",
      "lg-thumbnail.js",
      "lg-zoom.js",
      
      "main.js",
    ]))
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
    .pipe(connect.reload());
});

// html
gulp.task('html', function () {
  var opts = {
    conditionals: true,
    spare: true
  };
  gulp.src('src/*.html')
    .pipe(plumber())
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload());
    //.pipe(notify('Done!'));
});


//connect
gulp.task('connect', function () {
  connect.server({
    root: 'dist/',
    port: 8000,
    livereload: true
  });
});


//Watch
gulp.task('watch', function () {
  gulp.watch(['src/scss/*.scss'], ['sass']);
  gulp.watch(['src/js/*.js'], ['js']);
  gulp.watch(['src/*.html'], ['html']);
  gulp.watch(['src/parts/*.html'], ['html']);
  gulp.watch(['dist/img/sprites/*.png'], ['sprite']);


});


//Default Task
gulp.task('default', ['connect', 'sass', 'js', 'html', 'sprite', 'watch']);




