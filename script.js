$(document).ready(function() {
    makeAQuote();

    $("#generate").click(function(event) {
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
            var twitterHtml = '<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=' + quote + " --" + character + '&hashtags=gameofthrones&size=large">Tweet</a>';
            $("#tweet").html(twitterHtml);
        }
    });
};


// window.twttr = (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0],
//     t = window.twttr || {};
//   if (d.getElementById(id)) return t;
//   js = d.createElement(s);
//   js.id = id;
//   js.src = "https://platform.twitter.com/widgets.js";
//   fjs.parentNode.insertBefore(js, fjs);

//   t._e = [];
//   t.ready = function(f) {
//     t._e.push(f);
//   };

//   return t;
// }(document, "script", "twitter-wjs"));

