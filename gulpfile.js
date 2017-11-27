var gulp = require('gulp');
var sass = require('gulp-sass');
var cssbeautify = require('gulp-cssbeautify');

gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(cssbeautify())
    
//    instalujemy cssbeautify ze strony (https://www.npmjs.com/package/gulp-cssbeautify). dodajemy do gulpfile.js i wtedy w pliku css wszystko nam sie ladnie "uklada" wizualnie
    
        .pipe(gulp.dest('app/css'));
});

gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
});

gulp.task('hello', function(){
    console.log('czesc');
})