import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import svgo from 'gulp-svgo';

const svgSpriteConfig = {
  mode: {
    symbol: {
      dest: '',
      sprite: 'icons.svg',
    },
  },
};

gulp.task('icons', () =>
  gulp
    .src('src/components/icons/assets/icons/*.svg')
    .pipe(svgo())
    .pipe(svgSprite(svgSpriteConfig))

    .pipe(gulp.dest('src/components/icons/assets')),
);
