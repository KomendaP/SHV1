/**
 * Created by Pavlo_Komenda on 4/28/2015.
 */
var gulp = require('gulp'),
    conf = require('../config').images;

gulp.task(conf.t, function() {
    gulp.src(conf.src)
        .pipe(gulp.dest(conf.dest));
});