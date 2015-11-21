
$(window).resize(function(){
	if($(window).height() <= 550){
		$("#peke").hide()
	}else{
		$("#peke").show()
	}
});

$(".imagen").mouseover(function(){
	$(this).animate({width:"100%" },150,function(){

	});
})
$(".imagen").mouseout(function(){
	$(this).animate({width:"90%" },150,function(){

	});
})


if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
	var delta = 0;
	if (event.wheelDelta) delta = event.wheelDelta / 120;
	else if (event.detail) delta = -event.detail / 3;

	handle(delta);
	if (event.preventDefault) event.preventDefault();
	event.returnValue = false;
}

function handle(delta) {
	var time 	= 700;
	var distance 	= 400;

	$('html, body').stop().animate({
		scrollTop: $(window).scrollTop() - (distance * delta)
	}, time );
}
