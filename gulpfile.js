const gulp = require('gulp')
const sass = require('gulp-sass')
const fs = require('fs')

sass.compiler = require('node-sass')

gulp.task('sass-compiler', function(done) {
    gulp.src('./sassfiles/**/*.scss').pipe(sass.sync().on('error', sass.logError)).pipe(gulp.dest('./cssfiles/'));
    done();
});

gulp.task('sassfile:watcher', function (done) {
    gulp.watch('./sassfiles/**/*.scss', gulp.series('sass-compiler'));
    done();
});

gulp.task('default', gulp.series('sass-compiler', 'sassfile:watcher'), function(done) {
    done();
});

