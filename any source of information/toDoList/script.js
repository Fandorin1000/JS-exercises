$(function () {
    $("#add").on('click', function () {
        const text = $("#text").val();
        if (text !== "" && text[0] !== " ") {
            const li = $("<li></li>").text(text);
            $(li).append("<button class='delete'>X</button>");
            $("#list").append(li);
            $("#text").val("");
            $(".delete").on('click', function(){
                $(this).parent().remove();
            })
        }
    })
});
