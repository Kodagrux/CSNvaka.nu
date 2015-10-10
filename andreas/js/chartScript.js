
$(document).ready(function () 
{	
	var data = {
		labels: ["23.00", "23.05", "23.10", "23.15", "23.20", "23.25", "23.30", "23.35", "23.40", "23.45", "23.50", "23.55", "00.00"],
		// labels: ["", "", "", "", "", "", "", "", "", "", "", "", ""],
		datasets: [
			{
				label: "Time",
				fillColor: "rgba(220,220,220,0.2)",
				strokeColor: "rgba(255,255,255,0)",
				highlightFill: "rgba(220,220,220,0.2)",
				highlightStroke: "rgba(220,220,220,.4)",
				data: [65, 59, 80, 81, 56, 55, 40, 45, 50, 55, 65, 78, 23]
			}
		]
	};

	var ctx = document.getElementById("myChart").getContext("2d");
	
	var myNewChart = new Chart(ctx).Bar(data, {
	    barShowStroke: true,
	    responsive: true,
	    
	    scaleShowLabels : false,
	    scaleShowGridLines: false,
	    barStrokeWidth: 1,
	    barValueSpacing: 12,
	    scaleLineColor: "transparent",
	    scaleFontColor: "rgba(255,255,255,0",

	    customToolTips: true,
	    tooltipEvents: ["mousemove", "touchstart", "touchmove"],
	    tooltipFillColor: "rgba(0,0,0,0.8)",
	    tooltipTemplate: "<%= value %>",
	    scaleLabel: "<%=value%>",

	});
});

