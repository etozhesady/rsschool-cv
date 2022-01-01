"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));

gulp.task("buildStyles", () => {
  return gulp
    .src("./*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("./styles"));
});

gulp.task("watch", () => {
  gulp.watch("*.scss", gulp.series("buildStyles"));
});
