const { src, dest, watch, parallel, series } = require('gulp');

const scss         = require('gulp-sass')(require('sass'));
const concat       = require('gulp-concat');
const browserSync  = require('browser-sync').create();
const uglify       = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin     = require('gulp-imagemin');
const del          = require('del');
const fileInclude  = require('gulp-file-include');

const htmlInclude = () => {
    return src(['app/html/*.html']) 
    .pipe(fileInclude({
      prefix: '@',
      basepath: '@file',
    }))
    .pipe(dest('app')) 
    .pipe(browserSync.stream());
  }




function browsersync() {
    browserSync.init({
        server : {
            baseDir: 'app/'
        }
    });
}

function cleanDist() {
    return del('dist')
}

function images() {
    return src('app/images/**/*')
        .pipe(imagemin(
            [
                imagemin.gifsicle({interlaced: true}),
                imagemin.mozjpeg({quality: 75, progressive: true}),
                imagemin.optipng({optimizationLevel: 5}),
                imagemin.svgo({
                    plugins: [
                        {removeViewBox: true},
                        {cleanupIDs: false}
                    ]
                })
            ]
        ))
        .pipe(dest('dist/images'))
}

function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
        'node_modules/mixitup/dist/mixitup.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function styles() {
    return src([
        'node_modules/ion-rangeslider/css/ion.rangeSlider.css',
        'app/scss/style.scss'])
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
};


function build() {
    return src([
       'app/css/style.min.css',
       'app/fonts/**/*',
       'app/js/libs.min.js',
       'app/*.html' 
    ], {base: 'app'})
        .pipe(dest('dist'))
}





function watching() {
    watch(['app/scss/**/*.scss'], styles);
   // watch(['app/js/**/*.js'], scripts);
    watch(['app/*.html']).on('change', browserSync.reload);
    watch(['app/html/**/*.html'], htmlInclude);

}
exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images  = images;
exports.cleanDist = cleanDist;
exports.htmlInclude = htmlInclude;

exports.build = series(cleanDist, images,  build);
exports.default = parallel( htmlInclude, styles, scripts, browsersync, watching);
