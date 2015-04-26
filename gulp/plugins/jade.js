/**
 * Created by Pavlo_Komenda on 4/22/2015.
 */
// JADE compile
var gulp = require('gulp'),
    jade = require('gulp-jade'),
    conf = require('./../config').jade;

gulp.task(conf.t, function() {
    gulp.src(conf.src)
        .pipe(jade(conf.settings))
        .pipe(gulp.dest(conf.dest));
});