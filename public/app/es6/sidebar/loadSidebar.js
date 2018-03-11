import $ from "jquery";
import template from "../../../templates/sidebar.html";

$("#sidebar-wrapper").html(template);

// "default" is equivalent to :  module.exports = location.pathname.split("/").pop();
export default location.pathname.split("/").pop();
