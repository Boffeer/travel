module.exports = function() {
       $.gulp.task('css', () => {
        return $.gulp.src('./dev/static/css/*.css')
            .pipe($.gulp.dest('./build/static/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};