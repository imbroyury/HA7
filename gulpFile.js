let less = require('gulp-less'),
    path = require('path'),
    gulp = require('gulp');

gulp.task('less', function () {
    return gulp.src('./less/**/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch('./less/**/*.less', ['less']);  // Watch all the .less files, then run the less task
});