var gulp = require('gulp');
var inject = require("gulp-inject");
var mainBowerFiles = require('main-bower-files');
var connect = require('gulp-connect');

gulp.task('index', function () {
  var target = gulp.src('./app/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./app/lib/*.js', './app/scripts/**/*.js', './app/lib/*.css', './app/css/*.css'], {read: false});



  return target.pipe(inject(sources, {relative: true}))
    .pipe(gulp.dest('./app'));
});

gulp.task('main-bower', function() {
    return gulp.src(mainBowerFiles())
        .pipe(gulp.dest('./app/lib'))
});


gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    port: 8888
  });
});
