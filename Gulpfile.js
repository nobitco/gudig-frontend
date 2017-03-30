var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename')
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var preset = require('babel-preset-es2015');

gulp.task('styles', function(){
	gulp
		.src('index.scss')
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('public'));
})

gulp.task('assets', function(){
    gulp
        .src('assets/*')
        .pipe(gulp.dest('public'));
})

gulp.task('js', function(){
    gulp
        .src('node_modules/materialize-css/bin/*.js')
        .pipe(gulp.dest('public'));
})

gulp.task('scripts', function () {
    browserify('./src/index.js')
        .transform(babel)
        .bundle()
        .pipe(source('index.js'))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('public'));
});

gulp.task('watch', ['styles', 'scripts','assets'], function(){
  gulp
    .watch(['index.scss', './src/**' , './assets/*.*'], ['styles', 'scripts','assets']).on('change', function(event){
  console.log(event.path + " " + event.type);
});  //watch ./src/** to watch all templates.js an index.js in src 
});

gulp.task('default', ['styles', 'assets', 'js', 'scripts']);
