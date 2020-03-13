var gulp = require("gulp");
var npmDist = require("gulp-npm-dist");
var rename = require("gulp-rename");
var del = require("del");
var uglify = require("gulp-uglify");
var cleanCss = require("gulp-clean-css");
var browserSync = require("browser-sync").create();

// Task to copy vendor libraries
gulp.task("copy-libs", async function() {
    gulp
        .src(npmDist(), { base: "./node_modules/" })
        .pipe(
            rename(function(path) {
                path.dirname = path.dirname.replace(/\/dist/, "").replace(/\\dist/, "");
            })
        )
        .pipe(gulp.dest("./static/vendors"));
});

// Task to delete target vendor lib folder
gulp.task("clean", async function() {
    return del(["static/vendors/**", "!static/vendors"]);
});

// Uglify Javascript
gulp.task("uglify", function() {
    return gulp
        .src(["static/js/*.js", "!static/js/*.min.js"])
        .pipe(uglify())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("static/js"));
});

// Minify CSS
gulp.task("minify", function() {
    return gulp
        .src(["static/css/*.css", "!static/css/*.min.css"])
        .pipe(cleanCss({ compatibility: "ie8" }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("static/css"));
});

// Watch JS and CSS files for changes and uglify / minify accordingly
gulp.task("watch", function() {
    browserSync.init(null, {
        proxy: "http://localhost:8000",
        files: ["static/js/**/*.*", "static/css/**/*.*", "*.html"],
        port: 9000
    });
    gulp.watch(["static/js/*.js", "!static/js/*.min.js"], gulp.series("uglify"));
    gulp.watch(
        ["static/css/*.css", "!static/css/*.min.css"],
        gulp.series("minify")
    );
});

gulp.task("cp", gulp.series(["clean", "copy-libs"]));
gulp.task("default", gulp.series("watch"));