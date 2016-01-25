
function change_outer_links_targets (links){
  for (var index in links) {
    if (links[index].hostname != window.location.hostname) {
      links[index].target = '_blank'; }}}

function load_fortune_cookie (fortunes) {
    var random_index = Math.floor( Math.random() * fortunes.length );
    var fortune_quote     = fortunes[random_index]["quote"];
    var fortune_book_link = fortunes[random_index]["book_link"];
    document.getElementById("fortune-cookie").innerHTML    = fortune_quote;
    document.getElementById("fortune-book-link").innerHTML = fortune_book_link;
}
