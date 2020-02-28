$(window).on('load', function(){
	$('.loading').fadeIn("slow",function(){
    $(this).delay(5000).fadeOut("slow");
  });
});
$('.st')
.on('mouseover', function() {
  $(this).css('opacity', 0.5);
})
.on('mouseleave', function() {
  $(this).css('opacity', 1);
});

$('.final').on('mouseover', function() {
  $(".us1").fadeIn(4000);
});

$('.final').on('mouseleave', function() {
  $(".us1").fadeOut(2000);
});