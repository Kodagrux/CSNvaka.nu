
$(document).ready(function () 
{	
	var data = {
		labels: ["22.35", "22.40", "22.45", "22.50", "22.55", "23.00", "23.05", "23.10", "23.15", "23.20", "23.25", "23.30", "23.35", "23.40", "23.45", "23.50", "23.55", "00.00"],
		// labels: ["", "", "", "", "", "", "", "", "", "", "", "", ""],
		datasets: [
			{
				label: "Time",
				fillColor: "rgba(220,220,220,0.2)",
				strokeColor: "rgba(255,255,255,0)",
				highlightFill: "rgba(220,220,220,0.7)",
				highlightStroke: "rgba(220,220,220,.4)",
				data: [(Math.random() * 100), (Math.random() * 100), (Math.random() * 100), (Math.random() * 100), (Math.random() * 100), (Math.random() * 100), (Math.random() * 100), (Math.random() * 100), (Math.random() * 100), (Math.random() * 100), (Math.random() * 100), (Math.random() * 100), (Math.random() * 100), (Math.random() * 100), (Math.random() * 100), (Math.random() * 100), (Math.random() * 100), (Math.random() * 100), ]
			}
		]
	};

	var ctx = document.getElementById("myChart").getContext("2d");
	
	var myNewChart = new Chart(ctx).Bar(data, {
	    barShowStroke: true,
	    responsive: true,
	    maintainAspectRatio: true,
	    
	    scaleShowLabels : false,					// hides y-axis labels
	    scaleShowGridLines: false,					// Hides grid-lines
	    barStrokeWidth: 1,							// pixel width of bar strokes
	    barValueSpacing: 10,						// space between x-value sets
	    scaleLineColor: "transparent",				// color of x / y -axises
	    scaleFontColor: "rgba(255,255,255,0",		// scale font color

	    customToolTips: true,						// tooltips shown on hover 
	    tooltipEvents: ["mousemove", "touchstart", "touchmove"],
	    tooltipFillColor: "rgba(0,0,0,0.8)",
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
	myNewChart.update();
});

