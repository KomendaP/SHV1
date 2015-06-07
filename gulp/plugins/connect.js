/**
 * Created by Pavlo_Komenda on 4/23/2015.
 * Project server
 */
var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    task    = require('./../config');
    conf    = require('./../config').connect;

gulp.task(conf.t, [task.jade.t, task.js.t, task.less.t], function() {
    connect.server(conf.options);
});