var	root 	= './',
	source 	= root 	+ 'src/',
	dist 	= root 	+ 'dist/',
	bower 	= root 	+ 'bower_components/',
	btstrp 	= bower + 'bootstrap/',
	flags 	= bower + 'flag-icon-css/';

var filesToMove = [
		btstrp + 'fonts/**/*.*',
		flags + '/**/*.*',
		source + 'images/**/*.*'
	];

var gulp 	= require('gulp'),
	connect = require('gulp-connect'),
	concat 	= require('gulp-concat'),
	jade 	= require('gulp-jade'),
	less 	= require('gulp-less'),
	watch 	= require('gulp-watch'),
	copy 	= require( 'gulp-contrib-copy' ),
	//fs 		= require('fs-extra'),
	del 	= require('delete'),
	path 	= require('path');


// JADE compile
gulp.task('jade', function() {
	gulp.src(source + 'templates/index.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest(dist));
});

// LESS compile
//gulp.task('less', function () {
//	return gulp.src(source + 'less/*.less')
//		.pipe(less({
//			paths: [ path.join(__dirname, 'less', 'includes') ]
//		}))
//		.pipe(gulp.dest(dist + 'css'));
//});
gulp.task('stream', function () {
	gulp.src(source + 'less/*.less')
		.pipe(watch(source + 'less/**/*.less'))
		.pipe(less({
			paths: [ path.join(__dirname, 'less', 'includes') ]
		}))
		.pipe(gulp.dest(dist + 'css'));
});

gulp.task('watch:less', function () {
	watch(source + 'less/**/*.less', function () {
		gulp.src(source + 'less/*.less')
			.pipe(less())
			.pipe(gulp.dest(dist + 'css'));
	});
});

// JS concat and minify
gulp.task('js', function() {
	gulp.src([
			bower + 'jquery/dist/jquery.js',
			btstrp +'/dist/js/bootstrap.js',
		])
		.pipe(concat('all.js'))
		.pipe(gulp.dest(dist + 'js'));
});

// Font copy
gulp.task('move', function(){
	gulp.src(btstrp + 'fonts/**/*.*', { base: btstrp})
		.pipe(gulp.dest(dist));
	gulp.src(flags + 'flags/**/*.*', { base: flags })
		.pipe(gulp.dest(dist));
	gulp.src(source + 'images/**/*.*', { base: source })
		.pipe(gulp.dest(dist));
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
