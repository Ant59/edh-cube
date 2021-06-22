import {parallel, src, dest, watch as gulpwatch} from 'gulp';
import markdown from 'gulp-markdown';
import headerfooter from 'gulp-headerfooter';

const css = cb => {
    src('css/*.css')
        .pipe(dest('docs/css'));
    cb();
};

const fonts = cb => {
    src('fonts/*')
        .pipe(dest('docs/fonts'));
    cb();
};

const images = cb => {
    src('img/*')
        .pipe(dest('docs/img'));
    cb();
};

const md = cb => {
    src('cube.md')
        .pipe(markdown())
        .pipe(headerfooter.header('./header.html'))
        .pipe(headerfooter.footer('</body></html>'))
        .pipe(dest('docs'));
    cb();
};

export const compile = parallel(css, fonts, images, md);

export const watch = () => {
    compile();
    gulpwatch('css/*', css);
    gulpwatch('fonts/*', fonts);
    gulpwatch('img/*', images);
    gulpwatch('./*.md', md);
}

export default compile;
