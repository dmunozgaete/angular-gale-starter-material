//------------------------------------------------------
// Company: Valentys Ltda.
// Author: dmunozgaete@gmail.com
// 
// Description: Initialize a web Server
// 
// URL: https://www.npmjs.com/package/grunt-contrib-connect
//------------------------------------------------------
module.exports = function(grunt, options) {

    return {
		development: {
	        options: {
	        	open: options.openbrowser,
	            livereload:options.livereload,
	            keepalive: !options.livereload,
	            base: options.server.path,
	            port: options.server.port,
	            hostname: options.server.hostname,
	            protocol: options.server.protocol
	        }
	    },

	    production: {
	    	options: {
	        	open: true,
	            livereload:false,
	            keepalive: true,
	            base: options.server.path,
	            port: options.server.port,
	            hostname: options.server.hostname,
	            protocol: options.server.protocol
	        }
	    }
    }

};