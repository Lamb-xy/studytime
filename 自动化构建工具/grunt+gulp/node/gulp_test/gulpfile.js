const gulp=require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var livereload = require('gulp-livereload');
//gulp@3的写法
// gulp.task('minifyjs', function() {
//     return gulp.src('src/js/*.js') //操作的源文件
//         .pipe(concat('built.js')) //合并到临时文件
//         .pipe(gulp.dest('dist/js')) //生成到目标文件夹
//         .pipe(rename({suffix: '.min'})) //重命名
//         .pipe(uglify())    //压缩
//         .pipe(gulp.dest('dist/js'));
// });

//gulp@4写法
var minifyjs=function(){
    return gulp.src('src/js/*.js') //操作的源文件
        .pipe(concat('built.js')) //合并到临时文件
        .pipe(gulp.dest('dist/js')) //生成到目标文件夹
        .pipe(rename({suffix: '.min'})) //重命名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload());
}


//less处理任务
var lessTask=function () {
    return gulp.src('src/less/*.less')
        .pipe(less())

        .pipe(gulp.dest('src/css'))
        .pipe(livereload());
}
//css处理任务, 指定依赖的任务
var cssTask=function(){
    return gulp.src('src/css/*.css')
        .pipe(concat('built.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload());
}
//压缩html任务
var htmlMinify = function() {
    return gulp.src('index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
};


var watch = function () {
    //开启监视
    livereload.listen();
    //监视指定的文件, 并指定对应的处理任务
    gulp.watch('src/js/*.js', minifyjs)
    gulp.watch(['src/css/*.css','src/less/*.less'], cssTask,lessTask);
};
// gulp.series是异步的，gulp.parallel是同步的，在这里lessTask要先完成
module.exports.default=gulp.series(lessTask,gulp.parallel(minifyjs,cssTask,htmlMinify),watch);
//导出任务
// module.exports.minifyjs=minifyjs;
// module.exports.lessTask=lessTask;
// module.exports.cssTask=cssTask;

// 传给default可以一起导出
// module.exports.default=gulp.series(lessTask,cssTask);

