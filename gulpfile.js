var gulp = require('gulp'),
    livereload = require('gulp-livereload');
    browserSync = require('browser-sync').create();
 
gulp.task('browserSync', function(cb) {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
  cb()
})

gulp.task('watch', function() {
  gulp.watch(["index.html", "**/*"], (cb)=>{
    browserSync.reload();
    cb()
  })
});

gulp.task('default', gulp.series('browserSync', 'watch'))