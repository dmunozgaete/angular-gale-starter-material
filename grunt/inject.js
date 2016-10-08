//------------------------------------------------------
// Company: Valentys Ltda.
// Author: dmunozgaete@gmail.com
// 
// Description: Lift Web Server , and run some tasks
//------------------------------------------------------
module.exports = function(grunt, options)
{
    var util = require('util');

    grunt.registerTask('inject', 'injector:development');
}
