
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

	var chart_data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	var data = {
		 labels: ["", "", "", "", "", "", "", "", "", "", "", "", ""],
		datasets: [
			{
				label: "Time",
				fillColor: "rgba(220,220,220,0.2)",
				strokeColor: "rgba(255,255,255,0)",
				highlightFill: "rgba(220,220,220,0.4)",
				highlightStroke: "rgba(220,220,220,0.4)",
				data: chart_data
			}
		]
	};

	var ctx = document.getElementById("myChart").getContext("2d");
	// myNewChart = 0;
	//setTimeout(function() {
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
	    tooltipFillColor: "rgba(255,255,255,0.6)",
	    tooltipFontColor: "#5A9CAA",
	    tooltipTemplate: "<%= value %> besökare",
	    scaleLabel: "<%=value%>",
	});
	//}, 1500);

	/*setInterval(function() {
		console.log(myNewChart);
		//myNewChart.datasets[0].bars[2].value = 0;// = chart_data2;
		myNewChart.removeData();
		myNewChart.addData([60], "");
		myNewChart.update();
		//alert("herro!!!");
	}, 1500);*/

/*	
	var myNewChart = new Chart(ctx).Line(data, {
	    barShowStroke: false,
	    responsive: true,
	    maintainAspectRatio: true,
	    scaleBeginAtZero : true,
	    
	    scaleShowLabels : false,					// hides y-axis labels
	    scaleShowGridLines: false,					// Hides grid-lines						// pixel width of bar strokes
	    barValueSpacing: 5,						// space between x-value sets
	    scaleLineColor: "transparent",				// color of x / y -axises
	    //scaleFontColor: "rgba(255,255,255,0.2)",		// scale font color

	    customToolTips: true,						// tooltips shown on hover 
	    tooltipEvents: ["mousemove", "touchstart", "touchmove"],
	    tooltipFillColor: "rgba(255,255,255,0.8)",
	    tooltipTitleFontColor: "#5A9CAA",
	    tooltipTemplate: "<%= value %>",
	    scaleLabel: "<%=value%>",
	});

	myNewChart.datasets[0].bars[0].fillColor  = "rgba(220,220,200,.07";
	myNewChart.datasets[0].bars[1].fillColor  = "rgba(220,220,200,.07";
	myNewChart.datasets[0].bars[2].fillColor  = "rgba(220,220,200,.07";
	myNewChart.datasets[0].bars[3].fillColor  = "rgba(220,220,200,.07";
	myNewChart.datasets[0].bars[4].fillColor  = "rgba(220,220,200,.07";
	myNewChart.datasets[0].bars[5].fillColor  = "rgba(220,220,200,.07";
	myNewChart.datasets[0].bars[6].fillColor  = "rgba(220,220,200,.07";
	myNewChart.datasets[0].bars[7].fillColor  = "rgba(220,220,200,.08";
	myNewChart.datasets[0].bars[8].fillColor  = "rgba(220,220,200,.09";
	myNewChart.datasets[0].bars[9].fillColor  = "rgba(220,220,200,.1";
	myNewChart.datasets[0].bars[10].fillColor = "rgba(220,220,200,.15";
	myNewChart.datasets[0].bars[11].fillColor = "rgba(220,220,200,.2";
	myNewChart.datasets[0].bars[12].fillColor = "rgba(220,220,200,.25";
	myNewChart.datasets[0].bars[13].fillColor = "rgba(220,220,200,.3";
	myNewChart.datasets[0].bars[14].fillColor = "rgba(220,220,200,.3";
	myNewChart.datasets[0].bars[15].fillColor = "rgba(220,220,200,.4";
	myNewChart.datasets[0].bars[16].fillColor = "rgba(220,220,200,.5";
	myNewChart.datasets[0].bars[17].fillColor = "rgba(220,220,200,.6";
	myNewChart.update();*/












 	var numOfOnline = 0;
    var count = 0;
    var offset = true;
    var refreshTime = 5000; //Sekunder

    var visitorsOnline = 1;
    var userID;
    $.post("130.239.212.138:8888/api/visitor/setVisitor", function(user_id){
       // Uonline.html(getNumOfOnline1); //skriva om domen
        userID = user_id;
    });

    $.post(("130.239.212.138:8888/api/visitor/updateVisitor/" + userID), function(visitors_online){
        visitorsOnline = visitors_online;
        myNewChart.removeData();
        myNewChart.addData([visitors_online], "");
        myNewChart.update();
    });
                    
    window.setInterval(function(){
        

        $.post("130.239.212.138:8888/api/visitor/updateVisitor/" + userID, function(visitors_online){
            visitorsOnline = visitors_online;
            myNewChart.removeData();
            myNewChart.addData([visitors_online], "");
            myNewChart.update();
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
