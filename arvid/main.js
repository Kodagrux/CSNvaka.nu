//Document-ready
$(document).ready(function () {

	$("#hero").addClass("fade-in");

	//$("body").addClass("bg-gradient");

	//"Scroll to"-function
	$(function(){
			$('a[href*=#]').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	   		&& location.hostname == this.hostname) {
	       		var $target = $(this.hash);
	       		$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
	       		if ($target.length) {
	          		 var targetOffset = $target.offset().top;
	           		$('html,body').animate({scrollTop: targetOffset}, 500);
	           		return false;
	       		}
	   		}	
		});
	});

	if (parseInt($("#day-value").html()) == 0) {
		console.log("Zero Days!");
		$(".ClassyCountdown-days").hide();
		$("#countdown-container>div>div").css({
			width: '25%',
			height: '300px',
			margin: '10px 4.14%'
		});

		if (parseInt($("#hour-value").html()) == 0) {
			console.log("Zero Hours!");
			$(".ClassyCountdown-hours").hide();
			$("#countdown-container>div>div").css({
				width: '27%',
				height: '324px',
				margin: '10px 4.14%'
			});

			$(".ClassyCountdown-minutes").css({
				marginLeft: '19%'
			});

			if (parseInt($("#minute-value").html()) == 0) {
				console.log("Zero Minutes!");
				$(".ClassyCountdown-minutes").hide();
				$("#countdown-container>div>div").css({
					width: '30%',
					height: '360px',
					margin: '10px 35.5%'
				});

			}
		}
	}

	//console.log(parseInt($("#hour-value").html()));


});

