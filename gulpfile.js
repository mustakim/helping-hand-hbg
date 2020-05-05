var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


gulp.task('watch', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "./"
        }
    });
    watch('./index.html', function() {
        browserSync.reload();
    })

    watch('./css/style.css', function() {
        browserSync.reload();
    })

    watch('./js/app.js', function() {
        browserSync.reload();
    })

    watch('./js/app.js', function() {
        browserSync.reload();
    })

    watch('./js/map-controller.js', function() {
        browserSync.reload();
    })
    
});