/**
 * Created by Pavlo_Komenda on 4/28/2015.
 */
var gulp = require('gulp'),
    del  = require('del'),
    connect = require('gulp-connect'),
    conf = require('../config').clear;

gulp.task(conf.t, function (cb) {
    del(conf.light, cb);
});