//------------------------------------------------------
// Company: Valentys Ltda.
// Author: dmunozgaete@gmail.com
// 
// Description: Dynamic Files Injector
// 
// URL: https://www.npmjs.com/package/grunt-html-build
//------------------------------------------------------
module.exports = function(grunt, options)
{
    return {
        development:
        {
            options:
            {
                ignorePath: '',
                relative: true,
                addRootSlash: false
            },
            files:
            {
                'app/index.html': [
                    'bower.json',
                    'app/bundles/bundles.js',
                    'app/bundles/custom/custom.js',
                    'app/bundles/**/*.js',
                    'app/views/**/*.js',
                    'app/views/**/*.css',
                    'app/bundles/**/*.css',
                    'app/app.js',
                    'app/config/config.js'
                ]
            }
        },
        production:
        {
            options:
            {
                ignorePath: '',
                relative: true,
                addRootSlash: false
            },
            files:
            {
                'app/index.html': [
                    'app/dist/css/bower.css',
                    'app/dist/css/application.css',
                    'app/dist/js/bower.min.js',
                    'app/dist/js/application.min.js',
                    'app/app.js'
                ]
            }
        }
    };
};
