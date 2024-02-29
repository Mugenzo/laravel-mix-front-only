let mix = require('laravel-mix');
require('mix-html-builder');

mix
    .sourceMaps(false, 'source-map')
    .js('resources/js/app.js', 'assets/js')
    .sass('resources/sass/style.scss', 'assets/css')
    .copyDirectory('resources/images', 'assets/images')
    .copyDirectory('resources/uploads', 'assets/uploads')
    .copyDirectory('resources/fonts', 'assets/fonts')
    .options({
        processCssUrls: false
    })
    .html({
        output: './',
        htmlRoot: './resources/html/*.html',
        partialRoot: './resources/html/partials',
        layoutRoot: './resources/html/layouts',
        minify: {
            removeComments: true
        }
    })
    .browserSync({
        proxy: false,
        server: {
            baseDir: './'
        },
        files: [
            'assets/js/*.js',
            'assets/css/*.css',
            '*.html'
        ]
    })