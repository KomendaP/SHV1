/**
 * Created by Pavlo_Komenda on 4/22/2015.
 */
var gulp        = require('gulp'),
    uglify 		= require('gulp-uglify'),
    streamify 	= require('gulp-streamify'),
    source 		= require('vinyl-source-stream'),
    browserify 	= require('browserify'),
    connect     = require('gulp-connect'),
    conf        = require('./../config');

gulp.task(conf.js.t, function () {
    return browserify(conf.js.src, conf.js.browserify.opt)
        .bundle()
        .pipe(source(conf.js.name))
        //.pipe(streamify(uglify()))
        .pipe(gulp.dest(conf.js.dest))
        .pipe(connect.reload())
        .on('error', conf.gutil.log);
});
