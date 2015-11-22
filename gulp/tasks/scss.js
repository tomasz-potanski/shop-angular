import autoprefix from 'gulp-autoprefixer';
import minifyCss from 'gulp-minify-css';
import neat from 'node-neat';
import sass from 'gulp-sass';


export default (gulp) => {

    const isDev = process.env.NODE_ENV !== 'production';
    const outputStyle = isDev ? 'nested' : 'compressed';
    const srcFiles = ['styles/**/*.scss'];

    const build = () => {
        gulp
            .src(srcFiles)
            .pipe(sass({
                includePaths: neat.includePaths,
                outputStyle: outputStyle
            }))
            .pipe(autoprefix({
                browsers: ['last 5 versions'],
                cascade: false
            }))
            .pipe(minifyCss({
                keepBreaks: false,
                keepSpecialComments: 0
            }))
            .pipe(gulp.dest('./public/css'));
    };

    gulp.task('scss', build);
    gulp.task('sass', build);

    gulp.task('scss:watch', ['scss'], () => {
        gulp.watch('**/*.scss', ['scss']);
    });
    gulp.task('sass:watch', ['scss'], () => {
        gulp.watch('**/*.scss', ['scss']);
    });
};
