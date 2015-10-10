var fezt = new Date(2015, 9, 10, 23, 59, 59, 999);

	var backColor = 'rgba(255, 255, 255, 0.1)';
	var frontColor = 'rgba(255, 255, 255, 1)';
	var thickNess = 0.035;
	var lineEnd = "round"; //"butt"

	$('#countdown-container').ClassyCountdown({

		theme: "white", 

		// end time
		end: $.now() + Math.floor((fezt.getTime() - $.now())/1000),//645600, 
		now: $.now(),

		// whether to display the days/hours/minutes/seconds labels.
		labels: true,

		// object that specifies different language phrases for says/hours/minutes/seconds as well as specific CSS styles.
		labelsOptions: {
			lang: {
				days: 'dagar',
				hours: 'timmar',
				minutes: 'minuter',
				seconds: 'sekunder'
			},
			style: 'font-size: 0.45em;'
		},

		// custom style for the countdown
		style: {
		  element: '',
		  labels: false,
		  text: 0.5,
		  days: {
		    gauge: {
		      thickness: thickNess,
		      bgColor: backColor,
		      fgColor: frontColor,
		      lineCap: lineEnd
		    },
		    textCSS: ''
		  },
		  hours: {
		    gauge: {
		      thickness: thickNess,
		      bgColor: backColor,
		      fgColor: frontColor,
		      lineCap: lineEnd
		    },
		    textCSS: ''
		  },
		  minutes: {
		    gauge: {
		      thickness: thickNess,
		      bgColor: backColor,
		      fgColor: frontColor,
		      lineCap: lineEnd
		    },
		    textCSS: ''
		  },
		  seconds: {
		    gauge: {
		      thickness: thickNess,
		      bgColor: backColor,
		      fgColor: frontColor,
		      lineCap: lineEnd
		    },
		    textCSS: ''
		  }
		},

		// callback that is fired when the countdown reaches 0.
		onEndCallback: function() {
			//alert ("slut!");
		}



	});






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

