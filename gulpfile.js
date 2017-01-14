
const gulp = require("gulp"); // I want to use the gulp module, fetch it and put in the variable gulp
const less = require("gulp-less"); // I want to use the gulp-less module, fetch it and put in the variable less
const babel = require("gulp-babel"); // I want to use the gulp-babel module, fetch it and put it in the variable babel

gulp.task("convert-less", () => {
    return gulp.src("src/style/main.less")
            .pipe(less())
            .pipe(gulp.dest("dist/style/"));
});

gulp.task("php", () => {
    return gulp.src("src/index.php")
            .pipe(gulp.dest("dist"));
});

gulp.task("js-ES6", () => {
    return gulp.src("src/js/**/*.js")
            .pipe(babel({
                presets: ["es2015"]
            }))
            .pipe(gulp.dest("dist/js"));
});

gulp.task("default", ["convert-less", "php", "js-ES6"]);