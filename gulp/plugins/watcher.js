/**
 * Created by Pavlo_Komenda on 4/23/2015.
 * Watcher
 */
var gulp    = require('gulp'),
    conf    = require('./../config'),
    watch    = require('./../config').watch;

gulp.task(watch.t, [conf.connect.t], function () {
    gulp.watch(watch.jade, [conf.jade.t]);
    gulp.watch(watch.less, [conf.less.t]);
    gulp.watch(watch.js, [conf.js.t]);
});