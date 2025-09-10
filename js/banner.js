$(function() {
    $(".flexslider").flexslider({
		animation: "fade",
		slideDirection: "horizontal",
		slideshow: true,
		slideshowSpeed: 5000,
		animationDuration: 200,
		touch: true,
		after: function() {
			var thisnum = $(".flex-control-nav a.flex-active").parent().index()+1;
			var thislength = $(".flex-control-nav li").length;
			if(thisnum==1){
				$(".cline").removeClass("traline");
				$(".cline").width(0);
				$(".num span").html("1");
				setTimeout(function(){ 
					turun(thisnum);
				}, 1);
			}else{
				$(".num span").html(thisnum);
				turun(thisnum);
			}
		},
	});
	$(".flex-prev").click(function(){
		$('.flexslider').flexslider("play");
	});
	$(".flex-next").click(function(){
		$('.flexslider').flexslider("play");
	});
	turun(1);
	function turun(thisnum){
		var thislength01 = $(".flex-control-nav li").length;
		var pjs = 100/thislength01;
		var startl = pjs*(thisnum-1)+"%";
		var endl = pjs*thisnum+"%";
		$(".cline").width(startl);
		$(".cline").stop().animate({width:endl},5020);
	}
});	