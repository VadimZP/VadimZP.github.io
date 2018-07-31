 'use strict'

 const gulp = require('gulp')
 const sass = require('gulp-sass')
 const sassImport = require('gulp-sass-import')
 const browserSync = require('browser-sync')
 const autoprefixer = require('gulp-autoprefixer')
 const plumber = require('gulp-plumber')
 const purify = require('gulp-purifycss')
 const cleanCSS = require('gulp-clean-css')
 const rename = require('gulp-rename')
 const wait = require('gulp-wait')
//  const refresh = require('gulp-refresh')

 gulp.task('browser-sync', function () {
     browserSync({
         server: {
             baseDir: './',
         },
         notify: false
     })
 });

 gulp.task('sass', function () {
     return gulp.src('./sass/**/*.scss')
         .pipe(wait(200))
         .pipe(sassImport({
             filename: '_file',
             marker: './*'
         }))
         .pipe(plumber())
         .pipe(sass({
             errLogToConsole: true
         }))
         .on('error', catchErr)
         .pipe(autoprefixer({
            browsers: ['last 15 versions'],
         }))
         .pipe(gulp.dest('./css'))
         .pipe(browserSync.reload({
             stream: true
         }))
 });

 function catchErr(e) {
     console.log(e)
     this.emit('end')
 }

 gulp.task('css', function () {
     return gulp.src('./css/styles.css')
        //  .pipe(purify(['./index.html']))
          .pipe(cleanCSS({
              debug: true
          }, (details) => {
              console.log(`${details.name}: ${details.stats.originalSize}`);
              console.log(`${details.name}: ${details.stats.minifiedSize}`);
          }))
         .pipe(rename('minified.css'))
         .pipe(gulp.dest('./css'))
         .pipe(browserSync.stream())
 });


 gulp.task('watch', ['browser-sync', 'sass', 'css'], function () {
     gulp.watch('./*.html', browserSync.reload)
     gulp.watch('./sass/**/*.scss', ['sass'])
     gulp.watch('./css/styles.css', ['css'])
 });