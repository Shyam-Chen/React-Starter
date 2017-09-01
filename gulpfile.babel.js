import gulp from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';

gulp.task('default', () =>
  gulp.src('src/main.js')
    .pipe(webpackStream('', webpack))
    .pipe(gulp.dest('dist/js/'))
);
