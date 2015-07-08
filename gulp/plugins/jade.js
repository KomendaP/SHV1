/**
 * Created by Pavlo_Komenda on 4/22/2015.
 */
// JADE compile
var gulp    = require('gulp'),
    jade    = require('gulp-jade'),
    connect = require('gulp-connect'),
    _if     = require('gulp-if'),
    conf    = require('./../config');

gulp.task(conf.jade.t, function() {
    gulp.src(conf.jade.src)
        .pipe(jade(_if(!conf.isProd, conf.jade.settings)).on('error', conf.gutil.log))
        .pipe(gulp.dest(conf.jade.dest))
        .pipe(connect.reload());
});