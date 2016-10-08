//------------------------------------------------------
// Company: Valentys Ltda.
// Author: dmunozgaete@gmail.com
// 
// Description: Unify all into one 'big' file
// 
// URL: https://www.npmjs.com/package/grunt-contrib-concat
// 
/// NOTE: If you want to add dependdencies THIS IS THE FILE ;)!
//------------------------------------------------------
module.exports = function(grunt, options) {
    var conf = {
        production_js: {
            options: {
                separator: ';',
            },
            files: {
                'app/dist/js/bundles.js': [
                    'app/bundles/**/*.js',
                ],
                
                'app/dist/js/controllers.js': [
                    'app/views/**/*.js',
                    'app/application.js',
                    'app/config/config.js'
                ],

                'app/dist/js/application.js': [
                	'app/dist/js/bundles.js',
                	'app/dist/js/controllers.js'
                ]
            }
        },

        production_css: {
            options: {
                separator: '\n',
            },
            files: {
                'app/dist/css/application.css': [
                    'app/bundles/**/*.css',
                    'app/views/**/*.css'
                ]
            }
        }
    };
    //---------------------------------------------------------------
    return conf;
};
