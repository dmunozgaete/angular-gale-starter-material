//------------------------------------------------------
// Company: Valentys Ltda.
// Author: dmunozgaete@gmail.com
// 
// Description: Material Icon's for using with the <md-icon/> directive
// 
// URL: https://www.google.com/design/icons/
// URL: https://github.com/nkoterba/material-design-iconsets
// 
// MD-ICON USE:
//		<md-icon md-svg-icon="category:icon"></md-icon> 

//    	WHERE:
//        	category: Icon Category, example: action
//			icon:   Icon Name, example: home
//------------------------------------------------------
angular.module('material-icons', ['ngMaterial'])

.config(function($mdIconProvider) {
    //Icons Set's (https://github.com/nkoterba/material-design-iconsets)
    var bundle_src = "bundles/material-icons/svg/icons/{0}-icons.svg";
    angular.forEach([
        "action", "alert", "av", "communication", "content",
        "device", "editor", "file", "hardware", "icons", "image",
        "maps", "navigation", "notification", "social", "toggle"
    ], function(toolset) {
        $mdIconProvider.iconSet(toolset, bundle_src.format([toolset]), 24);
    });
});