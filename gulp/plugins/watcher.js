/**
 * Created by Pavlo_Komenda on 4/23/2015.
 * Watcher
 */
var gulp    = require('gulp'),
    //watch   = require('gulp-watch'),
    task    = require('./../config'),
    conf    = require('./../config').watch;

gulp.task(conf.t, function () {
    gulp.watch(conf.jade, [task.jade.t]);
    gulp.watch(conf.less, [task.less.t]);
    gulp.watch(conf.js, [task.js.t]);
});