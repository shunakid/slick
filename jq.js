$(document).ready(function(){
  $('.search__text').keyup(function(){
    search__text = $(".search__text").val();
    $('.target li').each(function(){
      val = $(this).text();
      
      if (val.match(search__text)) {
        $(this).show();
    } else {
        $(this).hide();
      }
    });
  });
});