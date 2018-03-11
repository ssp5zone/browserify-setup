import $ from "jquery";

export default class Block {

    constructor(name, color, children) {
        this.name = name || "";
        this.color = color || '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        this.children = children || [];
    }

    render(container) {
        let html = $("<div></div>");
        html.attr("name", this.name);
        html.css("background-color", this.color);
        html.css("padding", "10px");
        html.append("<p><b>" + this.name + "</b></p>");
        if(this.isDark(this.color)) {
            html.find(">p").css("color", "white");
        }
        if (typeof container === "string") {
            $(container).append(html);
        } else {
            $("[name='" + container.name + "']").append(html);
        }
    }

    // can this be made private
    isDark(color) {
        let c = color.substring(1);      // strip #
        let rgb = parseInt(c, 16);   // convert rrggbb to decimal
        let g = (rgb >>  8) & 0xff;  // extract green
        return g < 130;
    }

}
