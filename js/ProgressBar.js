if($(window).width() >= 1024){
  // do your stuff

$( window ).scroll(function() {
  if($( window ).scrollTop() > 1100){
  $(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  });

   }else
       {
            $(".progress-bar").each(function(){
            each_bar_width = $(this).attr('aria-valuemin');
            $(this).width(each_bar_width + '%');
  });
       }
});
}else

$( window ).scroll(function() {
  if($( window ).scrollTop() > 2900){
  $(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  });

   }else
       {
            $(".progress-bar").each(function(){
            each_bar_width = $(this).attr('aria-valuemin');
            $(this).width(each_bar_width + '%');
  });
       }
});
