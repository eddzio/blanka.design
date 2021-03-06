// gulpfile.js
var gulp = require("gulp")
var notify = require("gulp-notify");
var clean = require("gulp-clean");
var prefixer = require("gulp-autoprefixer");
var concatenate = require("gulp-concat");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");

//compile sass
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['sass'], function() {

    browserSync.init({
        server: "."
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});
