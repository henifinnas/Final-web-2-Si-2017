$(document).ready(function(){
  var randomQuote;
  var randomNum;
  var author;
  function getQuote(){
          
    var quotes = [
      "if you want to success you have to study hard",
      "Beragam budaya ada di sini",
      "Kota kembang dengan sejuta warna",
    "jangan pernah sia-siakan apa yang sudah Tuhan berikan kepada hidup kita tapi syukurilah itu karena bersyukur akan membuat kita lebih bahagia"];
    
    var author = ["-The World",
                   "-Indonesia",
                   "-bandung",
                 "-Bawaulu"];
    
     randomNum = Math.floor((Math.random()*quotes.length));
     randomQuote = quotes[randomNum];
     author = author[randomNum];
    
    $(".quote").text(randomQuote);
    $(".author").text(author);
          }
  $("#NewQuote").on("click",function(){
    getQuote();
  });
  
  $("#tweet").on("click",function(){
    window.open("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + randomQuote + "-" + author);
  });
});