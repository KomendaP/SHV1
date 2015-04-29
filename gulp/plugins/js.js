/**
 * Created by Pavlo_Komenda on 4/22/2015.
 */
var gulp        = require('gulp'),
    uglify 		= require('gulp-uglify'),
    streamify 	= require('gulp-streamify'),
    source 		= require('vinyl-source-stream'),
    browserify 	= require('browserify'),
    connect     = require('gulp-connect'),
    conf        = require('./../config').js;

gulp.task(conf.t, function () {
    return browserify(conf.src, conf.browserify.opt)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source(conf.name))
        //.pipe(streamify(uglify()))
        .pipe(gulp.dest(conf.dest))
        .pipe(connect.reload());
});
