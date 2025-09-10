$(window).scroll(function(){
	var scrollTop = $(this).scrollTop();
	if($(this).scrollTop() ==0){
		$(".header").removeClass("yanse");
	}else{
		$(".header").addClass("yanse");
	}
});

$(".icon-arrow-down").click(function(){
	if($(this).parent().hasClass("hover")){
		$(this).parent().removeClass("hover");
		$(this).parent().find(".subnav").stop().slideToggle();
	}else{
		$(".menu .a").each(function(){
			if($(this).hasClass("hover")){
				$(this).removeClass("hover");
				$(this).find(".subnav").stop().slideToggle();
			}
		});
		$(this).parent().addClass("hover");
		$(this).parent().find(".subnav").stop().slideToggle();
	}
});
$(".menu_body").click(function(){
	if($(this).hasClass("show")){
		$(".menu").hide();
		$(this).removeClass("show");
		$("body").removeClass("menushow");
		$(".menu").removeClass("show");
		$(".header").removeClass("show");
		
	}else{
		$(".menu").show();
		$(this).addClass("show");
		$("body").addClass("menushow");
		$(".menu").addClass("show");
		$(".header").addClass("show");
		
	}
});
if($(window).width()>768){
	$(".menu .hasmenu").hover(function() {
		$(".menubg").stop(true, true).slideToggle(500);
	});
}

function numRunFun1(num1, maxNum1) {
	var numBox1 = document.getElementById("numBox1");
	var num1 = num1;
	var maxNum1 = maxNum1;
	var timer = setInterval(function() {
		num1++;
		if (num1 >= maxNum1) {
			numBox1.innerHTML = maxNum1;
			clearInterval(timer);
		} else {
			numBox1.innerHTML = ~~(num1);
		}
	}, 300);
}
numRunFun1(0, 10);