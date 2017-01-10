var connect = require('gulp-connect'),
	sass = require('gulp-sass'),
	del = require('del'),
	gulp = require('gulp'),
	watch = require('gulp-watch'),
	inject = require('gulp-inject'),
	runSequence = require('gulp-run-sequence'),
	concat = require('gulp-concat');

gulp.task('connect', function() {
    connect.server({
        port: 8000,
		livereload: true,
		root: ['build']
	});
});

gulp.task('clean', function() {
	return del('build');
});

gulp.task('index', function () {
	return gulp.src('dev/index.html')
		.pipe(inject(gulp.src(['./build/libs/**/*.js']), {addRootSlash: false, ignorePath: 'build', name: 'libs'}))
		.pipe(inject(gulp.src(['./build/scripts/**/*.js', './build/styles/**/*.css'], {read: false}), {addRootSlash: false, ignorePath: 'build'}))
		.pipe(gulp.dest('./build/'));
});

gulp.task('resource', function() {
	return gulp
		.src(['./dev/**/*',
			'!dev/**/*.scss', 
			'!dev/libs'])
		.pipe(gulp.dest('./build/'));
});

gulp.task('libs', function() {
	return gulp
		.src(['js/libs/**/*.min.js'])
		.pipe(gulp.dest('./build/libs'));
});

gulp.task('sass', function() {
	return gulp.src('./dev/styles/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./build/styles/'));
});

gulp.task('serve', function() {
  runSequence('resource', 'libs', 'sass', 'index', 'connect');
});

gulp.task('default', ['serve'], function() {
	gulp.watch(['./dev/styles/**/*.scss'], ['sass', 'index']);
	gulp.watch(['./dev/views/*.html', './dev/scripts/**/*.js'], ['resource', 'index']);
    gulp.watch(['./dev/index.html'], ['index']);
    gulp.watch(['./dev/libs/**/*.js'], ['libs', 'index']);
});