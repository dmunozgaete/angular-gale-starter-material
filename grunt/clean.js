//------------------------------------------------------
// Company: Valentys Ltda.
// Author: dmunozgaete@gmail.com
// 
// Description: Clean a folder, (dist folder for example)
// 
// URL: https://www.npmjs.com/package/grunt-contrib-concat
// 
/// NOTE: If you want to add dependdencies THIS IS THE FILE ;)!
//------------------------------------------------------
module.exports = function(grunt, options) {

	return {
		dist: [
			'app/dist/**/*.*'
		],

		post: [
			'app/dist/js/bundles.js',
			'app/dist/js/controllers.js'
		]
	};

};