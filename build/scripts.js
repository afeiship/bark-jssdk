(function () {
  'use strict';

  const gulp = require('gulp');
  const tsconfig = require('../tsconfig.json');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*']
  });


  gulp.task('scripts:cjs', function () {
    return gulp
      .src('src/**/*.ts')
      .pipe($.replace('export default ', 'export = '))
      .pipe($.jswork.pkgHeader())
      .pipe($.typescript({ ...tsconfig.compilerOptions, module: 'commonjs' }))
      .pipe(gulp.dest('dist/cjs'))
      .pipe($.size({ title: '[ minimize size ]:' }));
  });

  gulp.task('scripts:esm', function () {
    return gulp
      .src('src/**/*.ts')
      .pipe($.jswork.pkgHeader())
      .pipe($.typescript({ ...tsconfig.compilerOptions, module: 'esnext' }))
      .pipe(gulp.dest('dist/esm'))
      .pipe($.size({ title: '[ minimize size ]:' }));
  });
})();
