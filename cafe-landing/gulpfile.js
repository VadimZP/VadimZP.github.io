'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const sassImport = require('gulp-sass-import')
const browserSync = require('browser-sync')
const autoprefixer = require('gulp-autoprefixer')
const plumber = require('gulp-plumber')
const cleanCSS = require('gulp-clean-css')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const wait = require('gulp-wait')

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

gulp.task('css', function () {
    return gulp.src('./css/styles.css')
        .pipe(cleanCSS({
            debug: true
        }, (details) => {
            console.log(`${details.name}: ${details.stats.originalSize}`);
            console.log(`${details.name}: ${details.stats.minifiedSize}`);
        }))
        .pipe(rename('minified-styles.css'))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream())
});

gulp.task('js', function () {
    return gulp.src('./js/app.js')
        .pipe(uglify())
        .on('error', catchErr)
        .pipe(rename('minified-app.js'))
        .pipe(gulp.dest('./js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

function catchErr(e) {
    console.log(e)
    this.emit('end')
}

gulp.task('watch', ['browser-sync', 'sass', 'css', 'js'], function () {
    gulp.watch('./*.html', browserSync.reload)
    gulp.watch('./sass/**/*.scss', ['sass'])
    gulp.watch('./js/app.js', ['js'])
    gulp.watch('./css/styles.css', ['css'])
});