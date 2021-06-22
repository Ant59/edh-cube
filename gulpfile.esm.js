import {src, dest, watch} from 'gulp';
import markdown from 'gulp-markdown';
import headerfooter from 'gulp-headerfooter';

const css = cb => {
    src('css/*.css')
        .pipe(dest('dist/css'));
    cb();
};

const fonts = cb => {
    src('fonts/*')
        .pipe(dest('dist/fonts'));
    cb();
};

const md = cb => {
    src('cube.md')
        .pipe(markdown())
        .pipe(headerfooter.header('./header.html'))
        .pipe(headerfooter.footer('</body></html>'))
        .pipe(dest('dist'));
    cb();
};

export default () => {
    watch('css/*', css);
    watch('fonts/*', fonts);
    watch('*.md', md);
}
