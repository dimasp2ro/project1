$(document).ready(function(){
	function heightDetect(){
		$(".main_head").css('height', $(window).height());
		$(".top_wrapper").css('height', $(window).height());
	};
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});
	
	
	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function(){
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");

	});


	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline", midClick: true});


	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");
	$(".animation1").animated("flipInY", "flipOutY");
	$(".animation2, .left .resume_item").animated("fadeInLeft", "fadeOutLeft");
	$(".animation3, .right .resume_item").animated("fadeInRight", "fadeOutRight");
	
	

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");


	$(".toggle_mnu").click(function(){
		if(	$(".top_mnu").is(':visible')){ 
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li").removeClass("fadeInUp animated");
			$(".sandwich").removeClass("active");
			$(".top_text").animate({opacity:1}); } 
			else  {
				$(".top_mnu").fadeIn(600);
				$(".top_mnu li").addClass("fadeInUp animated");
				$(".sandwich").addClass("active");
				$(".top_text").animate({opacity:0.5});
			}});

	$(".top_mnu a").click(function(){
		$(".top_mnu").fadeOut(600);
		$(".sandwich").removeClass("active");	
	});

	$(".portfolio_item").each(function(i){
		$(this).find("a").attr("href", "#work_" +i);
		$(this).find(".port_descr").attr("id", "work_" +i);
	});

	$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();


});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	//$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	//$(".top_text p").animated("fadeInUp", "fadeOutDown");

});