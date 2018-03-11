var fs = require("fs");
var insertCSS =  require("insert-css");

require("./blocks/main");
require("./sidebar/main");
require("./coder/main");

var bootstrapTheme = fs.readFileSync("node_modules/bootstrap/dist/css/bootstrap.min.css", 'utf8'),
customStyle = fs.readFileSync("public/stylesheets/simple-sidebar.css", 'utf8')

insertCSS(bootstrapTheme);
insertCSS(customStyle);
