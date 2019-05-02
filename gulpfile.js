global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    fs: require('fs'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel('styles:dev', 'libs', 'pug', 'libsJS:dev', 'js:copy', 'svg', 'img:dev', 'fonts','svg:copy')));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('styles:build', 'libs', 'pug', 'libsJS:build', 'js:copy', 'svg', 'img:build', 'fonts','svg:copy')));

$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));

$.gulp.task('ftp', function() {
      return $.gulp.src('src/**')
        .pipe($.gp.ftp({
          host: '12.34.567.89',
          user: 'user',
          password: 'password',
          remotePath: '/'
        }))
        .pipe($.gulp.noop());
});
