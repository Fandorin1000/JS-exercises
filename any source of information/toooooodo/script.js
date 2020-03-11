$(function(){
    $("#add").on('click', function(){
        const text = $("#text").val();
        if(text !== "" && text[0] !== " ") {
           const elem = $("<li></li>").text(text).append("<button class='delete'>X</button>");
           $("#list").append(elem);
           $("#text").val("");
           $(".delete").on('click', function() {
               $(this).parent().remove();
           })
        }
    })
})