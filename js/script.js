$(function(){
	$.fn.turnPic=function(){
		var index=0;
		var showUl=$(this).children(".big").children("li");
		var len=showUl.length;
		var navList=$(this).children("div").children("a").children("img");
		var timer;
		navList.mouseover(function(){
			index=navList.index(this);
			showImg(index);
		}).eq(0).mouseover();
		$(this).hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(function(){
				showImg(index);
				index++;
				if(index==len){
					index=0;
				}
			},3000) 
		}).trigger("moverleave");
		
		function showImg(index){
			showUl.eq(index).stop(true,true).fadeIn("slow").siblings().fadeOut("slow");
			navList.removeClass("select").css("opacity","0.7").eq(index).addClass("select").css("opacity","1");
		}
	}	
	
});