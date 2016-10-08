//------------------------------------------------------
// Company: Valentys Ltda.
// Author: dmunozgaete@gmail.com
// 
// Description: Lift Web Server , and run some tasks
//------------------------------------------------------
module.exports = function(grunt, options) {
    var util = require('util');
    var tasks = [];
    
    
    tasks.push('sync');
    tasks.push('clean');
    tasks.push('injector:development');
    tasks.push('connect:development');
    if (options.livereload) {
        tasks.push('watch');
    }
    var verbose = function() {
        grunt.log.ok("syncing package.json => bower.json"); 
        
        //Clear Console
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
        //LIVE RELOAD
        if (options.livereload) {
            grunt.log.warn("Livereload: enabled, (to disable set arg --no-livereload when run grunt)");
        }
        else {
            grunt.log.warn("Livereload: disabled");
        }
        //SERVER PATH INFO
        grunt.log.warn("Base path: '" +
            options.server.path + "'"
        );
        grunt.log.ok(" ");
        grunt.log.ok("Lifting Deployment Server...settings thing's up");
        grunt.log.ok("-------------------------------------------------------------------------");
        //Other TASKS
        for (var task in tasks) {
            grunt.task.run(tasks[task]);
        }
    };
    grunt.registerTask('lift', verbose);
}
