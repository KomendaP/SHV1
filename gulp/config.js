/**
 * Created by Pavlo_Komenda on 4/22/2015.
 * Build configuration for GULP
 */
var tasks   = require('./task-list');
var gutil   = require('gulp-util');
var builds  = "./BUILDS";
var d     = builds + "/DEVELOPMENT";
var p    = builds + "/production";

var src     = './src',
    dest    = p,
    files   = dest + '/files',
    nm      = './node_modules',
    bw      = './bower_components';

module.exports = {
    isProd: /prod+/i.test(dest),
    gutil: gutil,
    images: {
        t:tasks.img,
        src: src + '/files/images/**',
        dest: files + '/images'
    },
    clear: {
        t:tasks.clear,
        light: [
            builds
        ],
        full: [
            builds,
            'bower_components',
            'node_modules'
        ]
    },
    production: {
        t:tasks.prod
    },
    connect: {
        t: tasks.connect,
        options: {
            root: dest,
            livereload: true
        },
        reload: {
            t: tasks.reload,
            src: dest + '*.html'
        }
    },
    watch: {
        t: tasks.watch,
        server: [
            dest + '*.html',
            dest + 'css/*.css',
            dest + 'js/*.js'
        ],
        jade: src + "/templates/**/*.jade",
        less: src + "/less/**/*.less",
        js: src + "/js/**/*.js",
        do: [
            tasks.reload
        ]
    },
    copy:{
        t: tasks.copy,
        fonts: {
            src: [
                nm + '/bootstrap/dist/fonts/*.eot',
                nm + '/bootstrap/dist/fonts/*.svg',
                nm + '/bootstrap/dist/fonts/*.ttf',
                nm + '/bootstrap/dist/fonts/*.woff',
                nm + '/bootstrap/dist/fonts/*.woff2'
            ],
            dest: dest + '/fonts'
        },
        svg: {
            src: {
                sm: bw + '/flag-icon-css/flags/1x1/*.svg',
                big: bw + '/flag-icon-css/flags/4x3/*.svg'
            },
            dest: dest + '/svg'
        }
    },
    jade: {
        t:tasks.jade,
        src: src + "/templates/**/!(_)*.jade",
        dest: dest,
        settings: {
            pretty: true
        }
    },
    less: {
        t: tasks.less,
        src: src + '/less/**/!(_)*.less',
        dest: dest + '/css',
        minifyCss: {
            compatibility: 'ie8'
        }
    },
    js: {
        t:tasks.js,
        src: src + '/js/main.js',
        dest: dest + '/js',
        name: 'all.js',
        browserify: {
            opt: {
                debug: true
            }
        }
    }
};