define([
    'jquery',
    'exports',
], function($, exports) {
    'use strict';
    
    var fs = require("fs");
    var template = fs.readFileSync("public/templates/sidebar.html", 'utf8');

    $("#sidebar-wrapper").html(template);
    
    // See: You are now exporting as one of the members. 
    exports.path = location.pathname.split("/").pop();
});