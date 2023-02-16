//jquery required
$(document).ready(function(){
    $("#my-btn").click(function(){
        var color = $('#colorinput').val();
        $("body").css("background-color", color);
    });
});