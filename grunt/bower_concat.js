//------------------------------------------------------
// Company: Valentys Ltda.
// Author: dmunozgaete@gmail.com
// 
// Description: Concat Bower Depedencies
// 
// URL: https://www.npmjs.com/package/grunt-contrib-concat
// 
/// NOTE: If you want to add dependdencies THIS IS THE FILE ;)!
//------------------------------------------------------
module.exports = function(grunt, options) {
    return {
        all: {
            dest: 'app/dist/js/bower.js',
            cssDest: 'app/dist/css/bower.css',
            exclude: [
                'angular-i18n',
                'install',
                'uninstall',
                'bower'
            ],
            dependencies: {
                'angular-material': [
                    'angular',
                    'angular-animate',
                    'angular-aria'
                ],
                'angular-ui-router': [
                    'angular'
                ]
            },
            bowerOptions: {
                relative: false
            }
        }
    };
};
