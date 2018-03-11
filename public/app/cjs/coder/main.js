var fs = require("fs");
var insertCSS =  require("insert-css");

require("prismjs");
require("prism-normalize-whitespace"); // we don't have to give full path since "paths" definition in config

var prismTheme = fs.readFileSync("node_modules/prismjs/themes/prism-coy.css", 'utf8');
insertCSS(prismTheme);

Prism.highlightAll();     
