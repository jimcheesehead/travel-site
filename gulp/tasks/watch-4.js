var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('html', function(done) {
	//console.log("Imagine something useful being done to your HTML here");
	done();
});

// Not sure if I should use gulp.series or gulp.parallel

gulp.task('watch', function() {
	console.log("Hooray - gulp 4 task watching!");

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	gulp.watch('./app/index.html', gulp.series('html'));
	gulp.watch('./app/assets/styles/**/*.css', gulp.series('styles'));
});


// gulp.task('cssInject', ['styles'], function() {
// 	return gulp.src('./app/temp/styles/styles.css')
// 		.pipe(browserSync.stream());
// });