define([
    "require",
    "insert-css",
    "./blocks/main",
    "./sidebar/main",
    "./coder/main",
], function(require, insertCSS) {
    var fs = require("fs");

    var bootstrapTheme = fs.readFileSync("node_modules/bootstrap/dist/css/bootstrap.min.css", 'utf8'),
    customStyle = fs.readFileSync("public/stylesheets/simple-sidebar.css", 'utf8');

    insertCSS(bootstrapTheme);
    insertCSS(customStyle);
});