var gulp 		= require('gulp'),
	util 		= require('gulp-util'),
	connect 	= require('gulp-connect'),
	watch 		= require('gulp-watch'),
	gulpif 		= require('gulp-if'),
	jade 		= require('gulp-jade'),
	less 		= require('gulp-less'),
	concat 		= require('gulp-concat'),
	uglify 		= require('gulp-uglify'),
	streamify 	= require('gulp-streamify'),
	path 		= require('path'),
	source 		= require('vinyl-source-stream'),
	browserify 	= require('browserify'),
	copy 		= require('gulp-copy-ext'),
	BowerFiles 	= require('gulp-bower');

var src = './src/*/';
var dest = './build';

//var	root 	= './',
//	source 	= root 	+ 'src/',
//	dist 	= root 	+ 'dist/',
//	bower 	= root 	+ 'bower_components/',
//	btstrp 	= bower + 'bootstrap/',
//	flags 	= bower + 'flag-icon-css/';


// JADE compile
gulp.task('jade', function() {
	gulp.src(source + 'templates/index.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest(dist));
});

// LESS compile

// JS concat and minify
gulp.task('js', function () {
	return browserify('./js/main', { debug: typ === 'development'})
		.bundle()
		.pipe(source('super.js'))
		.pipe(gulpif(typ === 'production', streamify(uglify())))
		.pipe(gulp.dest('./js'));
});

// Bower
gulp.task("bower-files", function(){
	return BowerFiles('src/libs/');
});

gulp.task('mcss', function() {
	gulp.src(['*.eot', '*.svg', '*.ttf', '*.woff', '*.woff2'])
		.pipe(copy())
		.pipe(gulp.dest(dest + '/'));
});

// Server
gulp.task('connect', function() {
	connect.server({
		root: dist,
		livereload: true
	});
});

// Page reload
gulp.task('html', function () {
	gulp.src( dist + '*.html')
		.pipe(connect.reload());
});

// Watcher
gulp.task('watch', function () {
	gulp.watch(
		[
			dist + '*.html',
			dist + 'css/*.css',
			dist + 'js/*.js'
		],
		['html']);
});

gulp.task('default', ['jade', 'less', 'js', 'copy', 'connect', 'watch']);
gulp.task('less', ['stream', 'watch:less']);
gulp.task('del', ['dell']);
