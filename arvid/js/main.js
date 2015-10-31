
// Count Down

var fezt = new Date(2015, 10, 12, 23, 59, 59, 999);

var backColor = 'rgba(255, 255, 255, 0.1)';
var frontColor = 'rgba(255, 255, 255, 1)';
var thickNess = 0.045;
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
		style: ''
	},

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

	// Hide unused balls
	/*if (parseInt($("#day-value").html()) == 0) {
		console.log("Zero Days!");
		$(".ClassyCountdown-days").hide();
		$("#countdown-container>div>div").addClass('no-days');
		$("#countdown-container>div>div").css({
			width: '25%',
			height: '300px',
			margin: '10px 4.14%'
		});

		if (parseInt($("#hour-value").html()) == 0) {
			console.log("Zero Hours!");
			$(".ClassyCountdown-hours").hide();
			$("#countdown-container>div>div").addClass('no-hours');
			$("#countdown-container>div>div").css({
				width: '27%',
				height: '324px',
				margin: '10px 4.14%'
			});

			
			$(".ClassyCountdown-minutes").css({
				marginLeft: '19%'
			});

			$(".ClassyCountdown-minutes").addClass('no-hours-minutes');

			if (parseInt($("#minute-value").html()) == 0) {
				console.log("Zero Minutes!");
				$(".ClassyCountdown-minutes").hide();
				$("#countdown-container>div>div").addClass('no-minutes');
				$("#countdown-container>div>div").css({
					width: '30%',
					height: '360px',
					margin: '10px 35.5%'
				});

			}
		}
	}*/

});


//Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-27168241-1', 'auto');
ga('send', 'pageview');


//Facebook Like
(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) {return;}
js = d.createElement(s); js.id = id;
js.src = "//connect.facebook.net/sv_SE/all.js#xfbml=1";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
