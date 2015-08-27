/**
 * LESS compile plugin
 * Created by Pavlo_Komenda on 4/22/2015.
 * @link: https://www.npmjs.com/package/gulp-less
 * @link: https://github.com/floridoo/gulp-sourcemaps
 * @link: https://github.com/less/less-plugin-clean-css
 * @link: https://github.com/less/less-plugin-autoprefix
 */
var gulp        = require('gulp'),
    less        = require('gulp-less'),
    sourcemaps  = require('gulp-sourcemaps'),
    path        = require('path'),
    minifyCss   = require('gulp-minify-css'),
    connect     = require('gulp-connect'),
    _if         = require('gulp-if'),
    conf        = require('./../config');

// task
gulp.task(conf.less.t, function () {
    gulp.src(conf.less.src)
        .pipe(_if(!conf.isProd, sourcemaps.init()))
        .pipe(less({paths: [path.join(__dirname, 'less', 'includes')]}).on('error', conf.gutil.log))
        .pipe(_if(conf.isProd, minifyCss(conf.less.minifyCss)))
        .pipe(_if(!conf.isProd, sourcemaps.write()))
        .pipe(gulp.dest(conf.less.dest))
        .pipe(connect.reload());
});
