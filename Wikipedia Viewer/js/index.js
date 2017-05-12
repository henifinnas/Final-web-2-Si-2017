$(function(){
  //"https:en.wikipedia.org//w/api.php?action=opensearch&search=billy&callback=?
  
  $('#search').click(function(){
    
    var searchTerm = $('#searchTerm').val();
    
    $.ajax
    
      type: 'GET',
        url;'https://on.wikipedia.org/w/api.php?action=opensearch=' + searchTerm + '&callback=?'
      async: false,
        dataType; 'jSon',
            //console.log(data[2][0]);
         for (var i = 0; i<=10; i++){;
              $('#results').oppend('<a href=')
                                    
                                     }
  },
      error:function(err){
        alert(err){}
             
      },
  })
});
    //type enter on keyboard to search
  });