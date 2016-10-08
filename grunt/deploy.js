//------------------------------------------------------
// Company: Valentys Ltda.
// Author: dmunozgaete@gmail.com
// 
// Description: Optimize Files for Production
//------------------------------------------------------
module.exports = function(grunt, options) {
    var util = require('util');
    var tasks = [];
    
    tasks.push('sync');
    tasks.push('clean:dist');
    tasks.push('bower_concat');
    tasks.push('concat');
    tasks.push('clean:post');
    tasks.push('uglify');
    tasks.push('injector:production');
         
    //RUN CONNECT
    tasks.push('connect:production');

    var verbose = function() {
        //Clear Console
        util.print("\u001b[2J\u001b[0;0H");
        util.print("\u001b[2J\u001b[0;0H");
        grunt.log.ok("-------------------------------------------------------------------------");
        grunt.log.ok("Gale Framework");
        grunt.log.ok("Contact: dmunozgaete@gmail.com");
        grunt.log.ok(" ");
        //SERVER INFO
        grunt.log.warn("Web server: " +
            options.server.protocol + "://" +
            options.server.hostname + ":" +
            options.server.port
        );
        //SERVER PATH INFO
        grunt.log.warn("Base path: '" +
            options.server.path + "'"
        );
        grunt.log.ok(" ");
        grunt.log.ok(" ");
        grunt.log.ok("Deploying...settings thing's up");
        grunt.log.ok("-------------------------------------------------------------------------");
        //Other TASKS
        for (var task in tasks) {
            grunt.task.run(tasks[task]);
        }
    };
    grunt.registerTask('deploy', verbose);
}