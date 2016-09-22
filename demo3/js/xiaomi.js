/*!start part*/
//呼出模态窗口
$(function(){
	$(".content .left>li:last-child,footer article li:last-child").click(function() {
	$('#myModal').modal()

});
});
//购物车hover效果
$(function(){
	$(".content .hide-shopping-car,.content .shopping-car").hover(function() {
		$(".content .shopping-car").css({
			backgroundColor: '#fff',
			color: '#FD6500'
		});
		$(".content .hide-shopping-car").stop(true).slideDown(200)
	}, function() {
		$(".content .hide-shopping-car").stop(true).delay(200).slideUp(200,function(){
			$(".content .shopping-car").css({
			backgroundColor: '#424242',
			color: '#B0B0B0'
		   });
		})
	});
})
// 搜索框获得焦点边框变为橙色，失去焦点边框还原
$(function(){
	$("#nav .content .input-group").focusin(function() {
		$("#nav .content .input-group .placeholder").fadeOut(300);
		$(this).css('border', '1px solid #EF1210');
	}).focusout(function() {
		$("#nav .content .input-group .placeholder").fadeIn(300);
		// mouseover()在css()前，能消除bug(取消焦点后,鼠标hover效果不起作用的情况）
	    $(this).mouseover(function(){
			$(this).css('border', '1px solid #757575');
		}).css('border', '1px solid #E0E0E0').mouseleave(function(event) {
			$(this).css('border', '1px solid #E0E0E0');
		});
	});
})
//隐藏目录下拉效果
$(function(){
	var count1;
	$("#nav .hide-content li span:last-child a").css('border', 'none');
	count1=$("#nav .content li").length;
	$("#nav .content .front li:not(:gt(6))").mouseover(function() {
		var i=$(this).index();
		if (i>=count1-2) return;
		$("#nav .hide-nav").stop(true,true).delay(200).slideDown(200)
		$("#nav .hide-content li").stop(true,true).hide().parent().children().eq(i).stop(true).fadeIn(100);
	});
	$("#nav .leave").hover(function() {
       $("#nav .hide-nav").stop(true,true).delay(200).slideDown(200)
	}, function() {
		$("#nav .hide-nav").stop(true,true).delay(200).slideUp(200);
	});
})
//主轮播图效果
var n=0,count2;
$(document).ready(function(){
	var t=0;
	count2=$("#main-carousel .pic a").length;
	$("#main-carousel .pic a:not(':first-child')").hide();
	$("#main-carousel .pointer li").click(function() {
		var i=$(this).index();
		if (i>=count2) return;
	$("#main-carousel .pic a").filter(":visible").stop(true).fadeOut(500).parent().children().eq(i).stop(true).fadeIn(1000);
	// document.getElementById("change-pic").style.background="";
	$(this).toggleClass("on");
	$(this).siblings().removeAttr("class");	
    });
	$("#main-carousel .next").click(function(event) {
		showAuto();
	});
	$("#main-carousel .last").click(function(event) {
		showAutoBack();
	});
    //设定定时器；    
    t=setInterval("showAuto()", 4000);
    $("#main-carousel .next,#main-carousel .last,#main-carousel .pointer,#main-carousel .pic").hover(function(){clearInterval(t)}, function(){t = setInterval("showAuto()", 4000);});//鼠标在当前区域内，清除定时器，鼠标移出，恢复定时器
	});
//主轮播图自动播放函数
function showAuto(){
	n = n >=(count2-1) ?0 : ++n;
	$("#main-carousel .pointer li").eq(n).trigger('click');
}
function showAutoBack(){
	n=n>=0?--n:2;
	$("#main-carousel .pointer li").eq(n).trigger('click');
}
//侧边目录栏效果
$(function(){
	$("#main-carousel aside .options li").mouseover(function() {
		var i=$(this).index();
		$("#main-carousel .option-content").show();
		$("#main-carousel .option-content>ul").filter(":visible").stop(true).hide().parent().children().eq(i).stop(true).show();
	});
	$("#main-carousel .options,#main-carousel .option-content").hover(function() {
		$("#main-carousel .option-content").show();
	}, function() {
		$("#main-carousel .option-content").hide();
	});
})
//小米明星单品
$(function(){
	$("#star-product .skip .glyphicon-menu-right").click(function() {
		$("#star-product li").stop(true,true).animate({left: '-1227px'}, 500);
		$(this).removeClass('on');
		$(this).siblings().addClass('on')
	});
	$("#star-product .skip .glyphicon-menu-left").click(function() {
		$("#star-product li").stop(true,true).animate({left: '0'}, 500);
		$(this).removeClass('on');
		$(this).siblings().addClass('on')
	});
    var s=setInterval("changeAuto()", 8000);
     $("#star-product .skip").hover(function(){clearInterval(s)}, function(){s = setInterval("changeAuto()", 8000);})
})
function changeAuto(){
	$("#star-product .skip .on").trigger('click');
}
//智能硬件 查看全部hover效果
$(function(){
	$("#intelligent-hardware>p").hover(function() {
		$("#intelligent-hardware>p span").css('backgroundColor', '#FF7D00');

	}, function() {
		$("#intelligent-hardware>p span").css('backgroundColor', '#B0B0B0');
	});
})
//搭配区
$(function(){
	$("#match article .show:not(:first-child)>ul").hide();
	$("#match .classify li").hover(function() {
		$(this).addClass('on');
		$(this).siblings().removeClass('on');
		var i=$(this).index();
		$("#match article .show").children().hide();
		$("#match article .show").eq(i).children().show();
	});
})
//配件区
$(function(){
	$("#parts article .show:not(:first-child)>ul").hide();
	$("#parts .classify li").hover(function() {
		$(this).addClass('on');
		$(this).siblings().removeClass('on');
		var i=$(this).index();
		$("#parts article .show").children().hide();
		$("#parts article .show").eq(i).children().show();
	});
})
//周边区
$(function(){
	$("#rim article .show:not(:first-child)>ul").hide();
	$("#rim .classify li").hover(function() {
		$(this).addClass('on');
		$(this).siblings().removeClass('on');
		var i=$(this).index();
		$("#rim article .show").children().hide();
		$("#rim article .show").eq(i).children().show();
	});
})
//为我推荐
$(function(){
	  var times=0;
		$("#recommend .skip .glyphicon-menu-right").click(function() {
		$(this).siblings().addClass('on');
		times++;
		var leftWith=-1227*times+"px";
		// var position=$("#recommend li").position();
		// var leftWith=-1227+position.left+"px";
		$("#recommend li").stop(true,true).animate({left: leftWith}, 500);
		if (times>=3) {
			 $(this).removeClass('on');
		     $("#recommend li").stop().animate({left: "-3684px"}, 500);
		     times=3;
		}
		// if (position.left<=-2454) {
		// $(this).removeClass('on');
		// $("#recommend li").stop(true).animate({left: "-3684px"}, 300);
		// }
	});
	$("#recommend .skip .glyphicon-menu-left").click(function() {
		$(this).siblings().addClass('on');
		times--;
		var leftWith=-1227*times+"px"
        // var position=$("#recommend li").position();
		// var leftWith=1227+position.left+"px";
		$("#recommend li").stop(true,true).animate({left: leftWith}, 500);
		if (times<=0) {
		    $(this).removeClass('on');
			$("#recommend li").stop().animate({left: "0"}, 500);
			times=0;
		}
		// if (position.left>=-1227)
		// {
		// $(this).removeClass('on');
		// $("#recommend li").stop(true).animate({left: "0"}, 300);
	 //    }
	});
})
//视频区hover效果
$(function(){
	$("#videos li img").mouseover(function() {
		$(this).parent().children('span').css({
			background: '#FF6700',
			borderColor: '#FF6700'
		});
	})
	$("#videos li span").mouseover(function(event) {
			$(this).css({
			background: '#FF6700',
			borderColor: '#FF6700'
		});
	});
	$("#videos li img").mouseout(function() {
		$(this).parent().children('span').css({
			background: 'rgba(0, 0, 0,0.5)',
			borderColor: '#FFFFFF'
			});
	});
})
//内容区
$(function(){
	$("#content .first-li").hover(function() {
		$(this).children(".target").stop(true,true).fadeIn(300)
	}, function() {
		$(this).children(".target").stop(true,true).hide();
	});
	var degree1=0;
	var degree2=0;
	var degree3=0;
	var degree4=0;

	changeBySelf($("#content .li1 .next"),$("#content .li1 .last"),degree1,$("#content .p1 li"));
    changeBySelf($("#content .li2 .next"),$("#content .li2 .last"),degree2,$("#content .p2 li"));
    changeBySelf($("#content .li3 .next"),$("#content .li3 .last"),degree3,$("#content .p3 li"));
    changeBySelf($("#content .li4 .next"),$("#content .li4 .last"),degree4,$("#content .p4 li"));




	
//     $("#content .li1 .next").click(function() {
// 		degree1++;
// 		var i=degree1;
// 		var leftWith=-296*degree1+"px";
// 		$(this).siblings(".change").children("li").stop(true,true).animate({left: leftWith}, 500);
// 		$("#content .pointer li").eq(i).addClass('on').siblings().removeClass('on');
// 		if (degree1>=3) {
// 		    $(this).siblings(".change").children("li").stop().animate({left: "-888px"}, 500);
// 		     degree1=3;
// 		}
// 	});
// 	$("#content .li1 .last").click(function() {
// 		degree1--;
// 		var i=degree1;
// 		var leftWith=-296*degree1+"px";
// 		$(this).siblings(".change").children("li").stop(true,true).animate({left: leftWith}, 500);
// 		$("#content .pointer li").eq(i).addClass('on').siblings().removeClass('on');
// 		if (degree1<=0) {
// 			$(this).siblings(".change").children("li").stop().animate({left: "0"}, 500);
// 			degree1=0;
// 		}
// })
// 	$("#content .li2 .next").click(function() {
// 		degree2++;
// 		var leftWith=-296*degree2+"px";
// 		$(this).siblings(".change").children("li").stop(true,true).animate({left: leftWith}, 500);
// 		if (degree2>=3) {
// 		    $(this).siblings(".change").children("li").stop().animate({left: "-888px"}, 500);
// 		     degree2=3;
// 		}
// 	});
// 	$("#content .li2 .last").click(function() {
// 		degree2--;
// 		var leftWith=-296*degree2+"px";
// 		$(this).siblings(".change").children("li").stop(true,true).animate({left: leftWith}, 500);
// 		if (degree2<=0) {
// 			$(this).siblings(".change").children("li").stop().animate({left: "0"}, 500);
// 			degree2=0;
// 		}

// })
// 	$("#content .li3 .next").click(function() {
// 		degree3++;
// 		var leftWith=-296*degree3+"px";
// 		$(this).siblings(".change").children("li").stop(true,true).animate({left: leftWith}, 500);
// 		if (degree3>=3) {
// 		    $(this).siblings(".change").children("li").stop().animate({left: "-888px"}, 500);
// 		     degree3=3;
// 		}
// 	});
// 	$("#content .li3 .last").click(function() {
// 		degree3--;
// 		var leftWith=-296*degree3+"px";
// 		$(this).siblings(".change").children("li").stop(true,true).animate({left: leftWith}, 500);
// 		if (degree3<=0) {
// 			$(this).siblings(".change").children("li").stop().animate({left: "0"}, 500);
// 			degree3=0;
// 		}

// })
// 	$("#content .li4 .next").click(function() {
// 		degree4++;
// 		var leftWith=-296*degree4+"px";
// 		$(this).siblings(".change").children("li").stop(true,true).animate({left: leftWith}, 500);
// 		if (degree4>=3) {
// 		    $(this).siblings(".change").children("li").stop().animate({left: "-888px"}, 500);
// 		     degree4=3;
// 		}
// 	});
// 	$("#content .li4 .last").click(function() {
// 		degree4--;
// 		var leftWith=-296*degree4+"px";
// 		$(this).siblings(".change").children("li").stop(true,true).animate({left: leftWith}, 500);
// 		if (degree4<=0) {
// 			$(this).siblings(".change").children("li").stop().animate({left: "0"}, 500);
// 			degree4=0;
// 		}
// })

})
//内容区独立变换函数
function changeBySelf(next,last,degree,pointer){
		next.click(function() {
		degree++;
		var i=degree;
		var leftWith=-296*degree+"px";
		$(this).siblings(".change").children("li").stop(true,true).animate({left: leftWith}, 500);
		$(this).siblings(".pointer").children('li').eq(i).addClass('on').siblings().removeClass('on');
		if (degree>=3) {
		    $(this).siblings(".change").children("li").stop().animate({left: "-888px"}, 500);
		     degree=3;
		}
	});
	last.click(function() {
		degree--;
		var i=degree;
		var leftWith=-296*degree+"px";
		$(this).siblings(".change").children("li").stop(true,true).animate({left: leftWith}, 500);
		$(this).siblings(".pointer").children('li').eq(i).addClass('on').siblings().removeClass('on');
		if (degree<=0) {
			$(this).siblings(".change").children("li").stop().animate({left: "0"}, 500);
			degree=0;
		}
})
	pointer.click(function(event) {
		var p=$(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		degree=p-1;
		next.trigger("click")
	});
}



