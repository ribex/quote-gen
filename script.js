$(document).ready(function() {
    var url = "https://got-quotes.herokuapp.com/quotes";
    
    $.ajax({
        url: url,
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
    
    $("#quote").submit(function(event) {
        event.preventDefault();
        
    })
});