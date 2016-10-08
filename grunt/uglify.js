//------------------------------------------------------
// Company: Valentys Ltda.
// Author: dmunozgaete@gmail.com
// 
// Description: Minify and unify javascript or css files
// 
// URL: https://www.npmjs.com/package/grunt-contrib-uglify
// 
// NOTE: If you want to add dependencies , GO TO CONCAT.JS
//------------------------------------------------------
module.exports = function(grunt, options) {
    var conf = {
        bower: {
            options: {
                compress: true,
                mangle: true,
                sourceMap: true
            },
            files: {
                'app/dist/js/bower.min.js': [
                    'app/dist/js/bower.js'
                ]
            }
        },
        application: {
            options: {
                compress: true,
                mangle: false,
                sourceMap: true
            },
            files :{
                'app/dist/js/application.min.js': [
                    'app/dist/js/application.js'
                ]
            }
        }
    };
    return conf;
};
