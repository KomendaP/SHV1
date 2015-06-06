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
    cleanCss    = require('less-plugin-clean-css'),
    autoprefix  = require('less-plugin-autoprefix'),
    connect     = require('gulp-connect'),
    conf        = require('./../config').less;

// conf
var settings = {
    paths: [
        path.join(__dirname, 'less', 'includes')
    ]/*,
    plugins: [
        new cleanCss(conf.pluginsSettings.autoprefix),
        new autoprefix(conf.pluginsSettings.cleanCss)
    ]*/
};

// task
gulp.task(conf.t, function () {
    gulp.src(conf.src)
        .pipe(sourcemaps.init())
        .pipe(less(/*settings*/))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(conf.dest))
        .pipe(connect.reload());
});
