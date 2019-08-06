var gulp = require('gulp'),
config = require('./config'),
webpack = require('webpack'),
browserSync = require('browser-sync').create(),
postcss = require('gulp-postcss'),
rgba = require('postcss-hexrgba'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
colorFunctions = require('postcss-color-function');

gulp.task('styles', function() {
  return gulp.src(config.themeLocation + 'css/main/style.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, rgba, colorFunctions, autoprefixer]))
    .on('error', (error) => console.log(error.toString()))
    .pipe(gulp.dest(config.themeLocation));
});

gulp.task('scripts', function(callback) {
  webpack(require('./webpack.config.js'), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }

    console.log(stats.toString());
    callback();
  });
});

gulp.task('watch', function() {
  console.log(config.themeLocation);
  browserSync.init({
    notify: false,
    proxy: config.urlToPreview,
    ghostMode: false
  });

  gulp.watch('./**/*.twig', function() {
    browserSync.reload();
  });
  gulp.watch('./**/*.scss', function() {
    browserSync.reload();
  });
  gulp.watch(config.themeLocation + 'css/**/*.scss', ['waitForStyles']);
  gulp.watch([config.themeLocation + 'js/modules/*.js', config.themeLocation + 'js/scripts.js'], ['waitForScripts']);
});

gulp.task('waitForStyles', ['styles'], function() {
  browserSync.reload();
});

gulp.task('waitForScripts', ['scripts'], function() {
  browserSync.reload();
});
