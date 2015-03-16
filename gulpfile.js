var gulp = require('gulp'),
	connect = require('gulp-connect'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	del = require('delete'),
	devDir = './app/',
	bow = './bower_components/';

// Server
gulp.task('connect', function() {
	connect.server({
		root: [devDir],
		livereload: true
	});
});

gulp.task('js', function() {
	gulp.src(
		[
			bow + 'jquery/dist/jquery.js',
			bow + 'bootstrap/dist/js/bootstrap.js',
		])
		.pipe(concat('all.js'))
		.pipe(gulp.dest(devDir + '/js'));
});

gulp.task('html', function () {
	gulp.src( devDir + '/*.html')
		.pipe(connect.reload());
});

gulp.task('dell', function () {
	//del(devDir + 'js/all.js', function(err) {
	//	if (err) {throw err;}
	//});
	del.sync(devDir + 'js/all.js');
});

gulp.task('watch', function () {
	gulp.watch(
		[
			devDir + '*.html',
			devDir + 'css/*.css',
			devDir + 'js/*.js'
		],
		['html']);
});

gulp.task('default', ['dell', 'js', 'connect', 'watch']);
gulp.task('del', ['dell']);