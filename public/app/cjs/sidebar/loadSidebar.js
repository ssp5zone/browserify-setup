var $ = require("jquery");
var fs = require("fs"); // internal node.js module. No need to install seperatly

// Notice: Just opening a file in traditional Node.js way. Nothing fancy.
// Read file syncronously, because we need it in next line
var template = fs.readFileSync("public/templates/sidebar.html", 'utf8');

$("#sidebar-wrapper").html(template);

// You can give exports path as well
exports.path = location.pathname.split("/").pop();
