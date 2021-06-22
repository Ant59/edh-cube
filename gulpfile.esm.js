import {parallel, src, dest, watch} from 'gulp';
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

const md = cb => {
    src('cube.md')
        .pipe(markdown())
        .pipe(headerfooter.header('./header.html'))
        .pipe(headerfooter.footer('</body></html>'))
        .pipe(dest('docs'));
    cb();
};

const watchfiles = () => {
    watch('css/*', css);
    watch('fonts/*', fonts);
    watch('*.md', md);
}

const compile = parallel(css, fonts, md);

export default compile;
