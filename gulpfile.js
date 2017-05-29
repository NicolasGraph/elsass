var gulp = require('gulp');
var sassdoc = require('sassdoc');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');

// Get the documentation
gulp.task('sassdoc', function () {
  return gulp.src('**/*.scss')
    .pipe(sassdoc())
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Watch for changes
gulp.task('watch', ['browserSync', 'sassdoc'], function (){
  gulp.watch('**/*.scss', ['sassdoc']); 
});

// Sync. browser
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'docs'
    },
  })
})

// $ gulp
gulp.task('default', function (callback) {
  runSequence(['sassdoc','browserSync', 'watch'],
    callback
  )
})
