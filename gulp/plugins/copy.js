/**
 * Created by Pavlo_Komenda on 4/22/2015.
 * Makes copy of fonts and SVG to project
 */
var gulp = require('gulp'),
    conf = require('./../config').copy;

gulp.task(conf.t, function(){
    // fonts
    gulp.src(conf.fonts.src)
        .pipe(gulp.dest(conf.fonts.dest));
    // svg
    gulp.src(conf.svg.src.sm)
        .pipe(gulp.dest(conf.svg.dest));
});