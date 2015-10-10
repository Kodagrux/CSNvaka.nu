Chart.defaults.global = {
	animation: true, 
	
}

$(document).ready(function () 
{
	var data = {
		labels: ["23.00", "23.05", "23.10", "23.15", "23.20", "23.25", "23.30", "23.35", "23.40", "23.45", "23.50", "23.55", "00.00"],
		datasets: [
			{
				label: "Time",
				fillColor: "rgba(220,220,220,0.5)",
				strokeColor: "rgba(220,220,220,0.8)",
				highlightFill: "rgba(220,220,220,0.75)",
				highlightStroke: "rgba(220,220,220,1)",
				data: [65, 59, 80, 81, 56, 55, 40, 45, 50, 55, 65, 78, 23]
			}
		]
	};

	var ctx = document.getElementById("myChart").getContext("2d");
	new Chart(ctx).Bar(data, {
	    // barShowStroke: false
	});
});

