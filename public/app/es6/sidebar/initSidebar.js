import $ from "jquery";
import path from "./loadSidebar"; // since we have used "default", we can give any name here

$("a[href='" + path + "']").addClass("active");

// Notice, arrow functions
$("#menu-toggle").click((e) => {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
