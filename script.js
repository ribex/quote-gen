$(document).ready(function() {
    makeAQuote();

    $("#generate").submit(function(event) {
        event.preventDefault();
        makeAQuote();
    });
});

var makeAQuote = function() {
    var url = "https://got-quotes.herokuapp.com/quotes";

    $.ajax({
        url: url,
        // No need for type in this API
        type: "GET",
        success: function(response){
            var quote = response.quote;
            var character = response.character;
            console.log(response);
            var quoteHtml = "<p>" + quote + "</p>";
            var charHtml = "<p>--- " + character + "</p>";
            $("#quote").html(quoteHtml);
            $("#character").html(charHtml);
        }
    });
};