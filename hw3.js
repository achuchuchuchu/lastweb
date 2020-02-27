$(window).on('load', function(){
	$('.loading').fadeIn("slow",function(){
    $(this).delay(5000).fadeOut("slow");
  });
});