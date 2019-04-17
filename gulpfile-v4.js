var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task("hello", function(done) { console.log("Hello!"); done(); });

gulp.task('default', function() {
	console.log("Hooray - you created a gulp task");
});

gulp.task('html', function(done) {
	console.log("Imagine something useful being done to your HTML here");
	done();
});

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});

// Not sure if I should use gulp.series or gulp.parallel

gulp.task('watch', function() {
	console.log("Hooray - gulp 4 task watching!");
	gulp.watch('./app/index.html', gulp.series('html'));
	gulp.watch('./app/assets/styles/**/*.css', gulp.series('styles'));
});