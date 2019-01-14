var gulp = require('gulp');
var sass = require('gulp-sass');

function styles() {
    return gulp.src('scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
};


//Watch task
gulp.task('default', function() {
    gulp.watch('scss/style.scss', styles);
});