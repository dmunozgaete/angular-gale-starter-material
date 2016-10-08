//------------------------------------------------------
// Company: Valentys Ltda.
// Author: dmunozgaete@gmail.com
// 
// Description: Watch for changes in file, and execute
// some Tasks (required for Livereload)
// 
// URL: https://www.npmjs.com/package/grunt-contrib-watch
//------------------------------------------------------
module.exports = function(grunt, options) {
    var livereload = options.livereload;

    return {
    	//Watch for bundles changes
        scripts: {
            files: [
                'app/bundles/**/*.js',
                'app/views/**/*.js',
                'app/config/**/*.js',
                'app/app.js'
            ],
            //tasks: [],
            options: {
                spawn: false,
                livereload: livereload
            }
        },

        //Watch for bundles changes
        css: {
            files: [
                'app/bundles/**/*.css',
            ],
            //tasks: [],
            options: {
                spawn: false,
                livereload: livereload
            }
        },


        //Watch for html changes
        html: {
            files: ['**/*.html'],
            options: {
                livereload: livereload
            }
        }
    }

};