var $ = require("jquery");

function Block(name, color, children) {

    this.name = name || "";
    this.color = color || '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    this.children = children || [];

    this.render = function (container) {
        var html = $("<div></div>");
        html.attr("name", this.name);
        html.css("background-color", this.color);
        html.css("padding", "10px");
        html.append("<p><b>" + this.name + "</b></p>");
        if(isDark(this.color)) {
            html.find(">p").css("color", "white");
        }
        if (typeof container === "string") {
            $(container).append(html);
        } else {
            $("[name='" + container.name + "']").append(html);
        }
        
    };

    // After hit and trial, found that green is the only 
    // decisive color when it comes to readability is green
    function isDark(color) {
        var c = color.substring(1);      // strip #
        var rgb = parseInt(c, 16);   // convert rrggbb to decimal
        var g = (rgb >>  8) & 0xff;  // extract green
        return g<130;
    }

};

module.exports = Block;