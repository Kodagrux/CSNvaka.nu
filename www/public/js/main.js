var nextPayDate = 0;


// Count Down
$.get(("../api/university/nextDate"), function(nextDate){
	var datez = new Date(2015, 11, 12, 23, 59, 59);
	nextPayDate = nextDate*1000;
    //console.log(nextPayDate);
    //console.log(datez.getTime());
    //console.log($.now());
    
	var fezt = new Date(2015, 11, 12, 23, 59, 59);

	var backColor = 'rgba(255, 255, 255, 0.1)';
	var frontColor = 'rgba(255, 255, 255, 1)';
	var thickNess = 0.045;
	var lineEnd = "round"; //"butt"

	$('#countdown-container').ClassyCountdown({

		theme: "white", 

		// end time
		end: $.now() + 5,//+ Math.floor((nextPayDate - $.now())/1000),//645600, 
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
			$("body").append('<audio autoplay><source src="audio/BanjoBoys.mp3" type="audio/mpeg"></audio>');
			$("head").append('<META HTTP-EQUIV="refresh" CONTENT="85">');
			setTimeout(function(){ 
				$("#countdown-container").css({opacity: "0"});
			}, 500);
			setTimeout(function(){ 
				$("#payout").css({opacity: "1"});
			}, 1000);
			//$("head").append('');

			//Refresh
			//alert ("Nu kom CSN! :D");
						///////////


					    if (!image_urls) {
					        var image_urls = Array()
					    }
					    if (!flash_urls) {
					        var flash_urls = Array()
					    }

					    // Bilderna kommer igrån http://www.netanimations.net/Cash-money-dollars-monetary-clip-art-animations.htm
					    image_urls['rain1'] = "img/bill.gif";
					    image_urls['rain2'] = "img/bill2.gif";
					    image_urls['rain3'] = "img/bill3.gif";
					    image_urls['rain4'] = "img/bill4.gif";
					    image_urls['rain5'] = "img/bill5.gif";
					    image_urls['rain6'] = "img/bill6.gif";
					    image_urls['rain7'] = "img/bill7.gif";
					    image_urls['rain8'] = "img/bill8.gif";

					    $(document).ready(function() {
					        var c = $(window).width()+100;
					        var d = $(window).height()+100;
					        var e = function(a, b) {
					            return Math.round(a + (Math.random() * (b - a)))
					        };
					        var f = function(a) {
					            setTimeout(function() {
					                a.css({
					                    left: e(0, c-50) + 'px',
					                    top: '-30px',
					                    display: 'block',
					                    opacity: '0.' + e(50, 100)
					                }).animate({
					                    top: (d-100) + 'px'
					                }, e(2000, 6000), function() {
					                    $(this).fadeOut('slow', function() {
					                        f(a)
					                    })
					                })
					            }, e(1, 5000))
					        };
					        $('<div></div>').attr('id', 'rainDiv')
					            .css({
					                position: 'fixed',
					                width: (c - 70) + 'px',
					                height: '1px',
					                left: '0px',
					                top: '-5px',
					                display: 'block'
					            }).appendTo('body');
					        for (var i = 1; i <= c/10; i++) {
					            var g = $('<img/>').attr('src', image_urls['rain' + e(1, 8)])
					                .css({
					                    position: 'absolute',
					                    left: e(0, c) + 'px',
					                    top: '-30px',
					                    display: 'block',
					                    opacity: '0.' + e(50, 100),
					                    'margin-left': 0
					                }).addClass('rainDrop').appendTo('#rainDiv');
					            f(g);
					            g = null
					        };
					        var h = 0;
					        var j = 0;
					        $(window).resize(function() {
					            c = $(window).width();
					            d = $(window).height()
					        })
					    });
						//////////////////


		} 

	});
});





//Document-ready
$(document).ready(function () {

	$("#hero").addClass("fade-in");

	setTimeout(function(){ 
		$("#logo").addClass("intro");
	}, 1000);

	setTimeout(function(){ 
		$("#copywrite").addClass("intro");
	}, 1500);

	setTimeout(function(){ 
		$("#share").addClass("intro");
	}, 2500);
	/*
	setTimeout(function(){ 
		$(".ClassyCountdown-days").addClass("fade-in").delay(50).queue(function(next){
			$(".ClassyCountdown-hours").addClass("fade-in").delay(50).queue(function(next){
				$(".ClassyCountdown-minutes").addClass("fade-in").delay(50).queue(function(next){
					$(".ClassyCountdown-seconds").addClass("fade-in");
					next();
				});
				next();
			});	
			next();
		});	
	}, 200);*/


	//"Scroll to"-function
	/*$(function(){
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
	});*/

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

	var data = {
		 labels: ["", "", "", "", "", "", "", "", "", "", "", "", ""],
		datasets: [
			{
				label: "Time",
				fillColor: "rgba(220,220,220,0.2)",
				strokeColor: "rgba(0,0,0,0)",
				highlightFill: "rgba(220,220,220,0.4)",
				highlightStroke: "rgba(0,0,0,0)",
				data: [0,0,0,0,0,0,0,0,0,0,0,0,0]
			}
		]
	};

	var ctx = document.getElementById("myChart").getContext("2d");
	var	myNewChart = new Chart(ctx).Bar(data, {
	    barShowStroke: false,
	    responsive: true,
	    maintainAspectRatio: true,
	    scaleBeginAtZero : true,
	    
	    scaleShowLabels : false,					// hides y-axis labels
	    scaleShowGridLines: false,					// Hides grid-lines						// pixel width of bar strokes
	    barValueSpacing: 5,						// space between x-value sets
	    scaleLineColor: "transparent",				// color of x / y -axises
	    //scaleFontColor: "rgba(255,255,255,0.2)",		// scale font color

	    //customToolTips: true,						// tooltips shown on hover 
	    tooltipEvents: ["mousemove", "touchstart", "touchmove"],
	    tooltipFillColor: "rgba(255,255,255,0.5)",
	    tooltipFontColor: "#5A9CAA",
	    tooltipTitleFontStyle: "bold",
	    tooltipTemplate: "<%= value %> besökare",
	    scaleLabel: "<%=value%>",
	});








    var refreshTime = 5000; //Sekunder

    var visitorsOnline = 0;
    var userID = 0;
    $.get("../api/visitor/setVisitor", function(user_id){
        userID = user_id;

        $.get(("../api/visitor/updateVisitor/" + userID), function(visitors_online){
	        visitorsOnline = visitors_online;
	        myNewChart.removeData();
	        myNewChart.addData([visitors_online], "");
            myNewChart.datasets[0].bars[12].fillColor = "rgba(255,255,255,0.35)";
            myNewChart.datasets[0].bars[11].fillColor = "rgba(255,255,255,0.2)";
            myNewChart.datasets[0].bars[10].fillColor = "rgba(255,255,255,0.2)";
            myNewChart.datasets[0].bars[9].fillColor = "rgba(255,255,255,0.2)";
            myNewChart.datasets[0].bars[8].fillColor = "rgba(255,255,255,0.2)";
            myNewChart.datasets[0].bars[7].fillColor = "rgba(255,255,255,0.2)";
            myNewChart.datasets[0].bars[6].fillColor = "rgba(255,255,255,0.2)";
            myNewChart.datasets[0].bars[5].fillColor = "rgba(255,255,255,0.2)";
            myNewChart.datasets[0].bars[4].fillColor = "rgba(255,255,255,0.2)";
            myNewChart.datasets[0].bars[3].fillColor = "rgba(255,255,255,0.2)";
            myNewChart.datasets[0].bars[2].fillColor = "rgba(255,255,255,0.2)";
            myNewChart.datasets[0].bars[1].fillColor = "rgba(255,255,255,0.2)";
            myNewChart.datasets[0].bars[0].fillColor = "rgba(255,255,255,0.2)";
	        myNewChart.update();
	    });
        
    });

    
                    
    window.setInterval(function(){
        
        $.get("../api/visitor/updateVisitor/" + userID, function(visitors_online){
        	if (visitors_online != visitorsOnline) {
        		myNewChart.removeData();
	            myNewChart.addData([visitors_online], "");
	            myNewChart.datasets[0].bars[12].fillColor = "rgba(255,255,255,0.35)";
	            myNewChart.datasets[0].bars[11].fillColor = "rgba(255,255,255,0.2)";
	            myNewChart.datasets[0].bars[10].fillColor = "rgba(255,255,255,0.2)";
	            myNewChart.datasets[0].bars[9].fillColor = "rgba(255,255,255,0.2)";
	            myNewChart.datasets[0].bars[8].fillColor = "rgba(255,255,255,0.2)";
	            myNewChart.datasets[0].bars[7].fillColor = "rgba(255,255,255,0.2)";
	            myNewChart.datasets[0].bars[6].fillColor = "rgba(255,255,255,0.2)";
	            myNewChart.datasets[0].bars[5].fillColor = "rgba(255,255,255,0.2)";
	            myNewChart.datasets[0].bars[4].fillColor = "rgba(255,255,255,0.2)";
	            myNewChart.datasets[0].bars[3].fillColor = "rgba(255,255,255,0.2)";
	            myNewChart.datasets[0].bars[2].fillColor = "rgba(255,255,255,0.2)";
	            myNewChart.datasets[0].bars[1].fillColor = "rgba(255,255,255,0.2";
	            myNewChart.update();
        	}

            visitorsOnline = visitors_online;
            
        });

    }, refreshTime);


    
















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
