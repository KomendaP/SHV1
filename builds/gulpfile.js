var gulp 		= require('gulp'),
	connect 	= require('gulp-connect'),
	watch 		= require('gulp-watch'),
	jade 		= require('gulp-jade'),
	less 		= require('gulp-less'),
	uglify 		= require('gulp-uglify'),
	streamify 	= require('gulp-streamify'),
	source 		= require('vinyl-source-stream'),
	browserify 	= require('browserify');

var	root 	= './',
	src 	= root 	+ 'src/',
	dst 	= root 	+ 'builds/',
    bower   = root 	+ 'bower_components/';



// LESS compile
gulp.task('less', function () {
    gulp.src(src + 'less/style.less')
        .pipe(less())
        .pipe(gulp.dest(dst + 'css/'));
});

// JS concat and minify
gulp.task('js',['copy'], function () {
    return browserify(src + 'js/main.js',{ debug: true })
    	.bundle()
    	.pipe(source('all.js'))
    	.pipe(streamify(uglify()))
    	.pipe(gulp.dest(dst + './js'));
});

// Copy
gulp.task("copy", function(){
	var fonts = bower + 'bootstrap/dist/fonts/';
	// JS
	gulp.src([
		bower + 'jquery/dist/jquery.js',
		bower + 'bootstrap/dist/js/bootstrap.js'
	]).pipe(gulp.dest(src + 'js/libs'));

    // fonts
	gulp.src([
        fonts + '*.eot',
        fonts + '*.svg',
		fonts + '*.ttf',
		fonts + '*.woff',
		fonts + '*.woff2',
        bower + 'flag-icon-css/flags/**'
    ]).pipe(gulp.dest(dst + 'fonts'));

    // img
    gulp.src([
            src + 'img/*.png',
            src + 'img/*.jpg',
            src + 'img/*.gif'
    ]).pipe(gulp.dest(dst + 'img'));
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

gulp.task('prepeare', ['copy']);
gulp.task('prod', ['']);
gulp.task('default', ['jade', 'js', 'less', 'connect', 'watch' ]);
