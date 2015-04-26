/**
 * Created by Pavlo_Komenda on 4/23/2015.
 * Project server
 */
var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    conf    = require('./../config').connect;

gulp.task(conf.t, function() {
    connect.server(conf.options);
});

gulp.task(conf.reload.t, function () {
    gulp.src(conf.reload.src)
        .pipe(connect.reload());
});