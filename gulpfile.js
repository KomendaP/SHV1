/**
 * Created by Pavlo_Komenda on 4/22/2015.
 */
var requireDir = require('require-dir'),
    gulp = require('gulp'),
    t = require('./gulp/task-list');

requireDir('./gulp/plugins', {recurse: true});

gulp.task('prepeare', [t.img, t.copy ]);
gulp.task('default', [t.jade, t.js, t.img, t.less, t.connect, t.watch ]);
