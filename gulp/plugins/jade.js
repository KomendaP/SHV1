/**
 * Created by Pavlo_Komenda on 4/22/2015.
 */
// JADE compile
var gulp    = require('gulp'),
    jade    = require('gulp-jade'),
    connect = require('gulp-connect'),
    conf    = require('./../config');

gulp.task(conf.jade.t, function() {
    gulp.src(conf.jade.src)
        .pipe(jade(conf.jade.settings))
        .pipe(gulp.dest(conf.jade.dest))
        .pipe(connect.reload())
        .on('error', conf.gutil.log);
});