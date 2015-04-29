var gulp 		= require('gulp'),
	util 		= require('gulp-util'),
	connect 	= require('gulp-connect'),
	watch 		= require('gulp-watch'),
	jade 		= require('gulp-jade'),
	less 		= require('gulp-less'),
	uglify 		= require('gulp-uglify'),
	streamify 	= require('gulp-streamify'),
	source 		= require('vinyl-source-stream'),
	bshim 		= require('browserify-shim'),
	browserify 	= require('browserify');

var	root 	= './',
	src 	= root 	+ 'src/',
	dst 	= root 	+ 'dst/',
    bower   = root 	+ 'bower_components/';

// JADE compile
gulp.task('jade', function() {
	gulp.src(src + 'templates/index.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest(dst));
});

// LESS compile
gulp.task('less', function () {
    gulp.src(src + 'less/style.less') // path to your file
        .pipe(less())
        .pipe(gulp.dest(dst + 'css/'));
});

// JS concat and minify
gulp.task('js',['copy'], function () {
	return browserify(src + 'js/main.js',{ debug: true})
		.bundle()
		.pipe(source('all.js'))
		//.pipe(streamify(uglify()))
		.pipe(gulp.dest(dst + './js'));
    //gulp.src(src + 'js/*.js')
     //   .pipe(concat('all.js'))
     //   .pipe(uglify())
     //   .pipe(gulp.dest(dst + './js'));
});

// Copy
gulp.task("copy", function(){
    // fonts
	gulp.src([
        bower + 'bootstrap/dist/fonts/*.eot',
        bower + 'bootstrap/dist/fonts/*.svg',
        bower + 'bootstrap/dist/fonts/*.ttf',
        bower + 'bootstrap/dist/fonts/*.woff',
        bower + 'bootstrap/dist/fonts/*.woff2',
        bower + 'flag-icon-css/flags'
    ])
        .pipe(gulp.dest(dst + 'fonts'));

    // JS
    gulp.src(bower + 'jquery/dist/jquery.js')
        //.pipe(rename(function (path) {path.basename = "a-" + path.basename;}))
        .pipe(gulp.dest(src + 'js'));
    gulp.src(bower + 'bootstrap/dist/js/bootstrap.js')
        .pipe(gulp.dest(src + 'js'));

    // img
    gulp.src([
            src + 'img/*.png',
            src + 'img/*.jpg',
            src + 'img/*.gif'
    ])
        .pipe(gulp.dest(dst + 'img'));
});

// Server
gulp.task('connect', function() {
	connect.server({
		root: dst,
		livereload: true
	});
});

// Page reload
gulp.task('html', function () {
	gulp.src( dst + '*.html')
		.pipe(connect.reload());
});

// Watcher
gulp.task('watch', function () {
	gulp.watch(
		[
			dst + '*.html',
			dst + 'css/*.css',
			dst + 'js/*.js'
		],
		['html']);
});

gulp.task('default',
    [
        'copy',
        'jade',
        'js',
        'less',
        'connect',
        'watch'
    ]
);
