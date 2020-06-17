var gulp = require('gulp');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');
var rename = require('gulp-rename');

gulp.task('svg-icon-generator', function () {
    return gulp
        .src('./src/assets/icons/*.svg')
        .pipe(svgmin())
        .pipe(svgstore())
        .pipe(rename('icons.svg'))
        .pipe(gulp.dest('./static/assets'));
});