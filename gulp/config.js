/**
 * Created by Pavlo_Komenda on 4/22/2015.
 * Build configuration for GULP
 */
var tasks  = require('./task-list');
var builds  = "./builds";
var dev     = builds + "/development";
var prod    = builds + "/production";

var src     = './src',
    dest    = dev,
    nm      = './node_modules',
    bw      = './bower_components';

module.exports = {
    images: {
        t:tasks.img
    },
    clear: {
        t:tasks.clear
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
        src: [
            dest + '*.html',
            dest + 'css/*.css',
            dest + 'js/*.js'
        ],
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
            dest: dest + '/files/fonts'
        },
        svg: {
            src: {
                sm: bw + '/flag-icon-css/flags/1x1/*.svg',
                big: bw + '/flag-icon-css/flags/4x3/*.svg'
            },
            dest: dest + '/files/svg'
        }
    },
    jade: {
        t:tasks.jade,
        src: src + "/templates/index.jade",
        dest: dest,
        settings: {
            pretty: true
        }
    },
    less: {
        t: tasks.less,
        src: src + '/less/style.less',
        dest: dest + '/css',
        pluginsSettings: {
            cleanCss:{
                advanced: true
            },
            autoprefix:{
                browsers: [
                    "last 2 versions"
                ]
            }
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