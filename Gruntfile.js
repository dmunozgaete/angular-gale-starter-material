module.exports = function(grunt) {
    var path = require('path');
    var config = {
        //Global Configuration
        data: {
            server: {
                hostname: 'localhost',
                port: 8000,
                protocol: 'http',
                path: 'app'
            },
            livereload: grunt.option('livereload') || false,
            openbrowser: grunt.option('open-browser') || false
        }
    };
    require('load-grunt-config')(grunt, config);
};
