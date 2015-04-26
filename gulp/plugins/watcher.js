/**
 * Created by Pavlo_Komenda on 4/23/2015.
 * Watcher
 */
var gulp    = require('gulp'),
    watch   = require('gulp-watch'),
    conf    = require('./../config').watch;

gulp.task(conf.t, function () {
    gulp.watch(conf.src, conf.do);
});