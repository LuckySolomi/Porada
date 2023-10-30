$(document).ready(function() {
    $(".visible-content").click(function() {
       $(this).closest(".expandable-text").find(".hidden-content").toggle('show');
    }); 
 });