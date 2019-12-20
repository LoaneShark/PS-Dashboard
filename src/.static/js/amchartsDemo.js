import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import $ from 'jquery';

$('#content').html(`<section class="h-card">
						<div class="d-flex row justify-content-between">
							<p class="display-2"><span class="text-nc-dark" id="title1">System </span><span class="text-nc-primary" id="title2">Administration</span></p>
						</div>
					</section>

					<!-- line break -->
					<hr class="my-4">

					<div id="timediv" class="timeChart"></div>
					<div class="row">
						<div id="donutdiv" class="sysadminChart"></div>
						<div id="bardiv" class="sysadminChart"></div>
					</div>`);

function generateTimeChartData() {
	    var chartData = [];
	    var firstDate = new Date();
	    firstDate.setDate(firstDate.getDate() - 1000);
	    var visits = 1200;
	    for (var i = 0; i < 500; i++) {
	        // we create date objects here. In your data, you can have date strings
	        // and then set format of your dates using chart.dataDateFormat property,
	        // however when possible, use date objects, as this will speed up chart rendering.
	        var newDate = new Date(firstDate);
	        newDate.setDate(newDate.getDate() + i);
	        
	        visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

	        chartData.push({
	            date: newDate,
	            visits: visits
	        });
	    }
	    return chartData;
	}
	am4core.ready(function() {

		// Themes begin
		am4core.useTheme(am4themes_dataviz);
		am4core.useTheme(am4themes_animated);
		// Themes end


		// Create line chart
		var lineChart = am4core.create("timediv", am4charts.XYChart);

		// Add data
		lineChart.data = generateTimeChartData();
		console.log(lineChart.data)

		// Create axes
		var dateAxis = lineChart.xAxes.push(new am4charts.DateAxis());
		dateAxis.renderer.minGridDistance = 50;

		var valueAxis = lineChart.yAxes.push(new am4charts.ValueAxis());

		// Create series
		var lineSeries = lineChart.series.push(new am4charts.LineSeries());
		lineSeries.dataFields.valueY = "visits";
		lineSeries.dataFields.dateX = "date";
		lineSeries.strokeWidth = 2;
		lineSeries.minBulletDistance = 10;
		lineSeries.tooltipText = "{valueY}";
		lineSeries.tooltip.pointerOrientation = "vertical";
		lineSeries.tooltip.background.cornerRadius = 20;
		lineSeries.tooltip.background.fillOpacity = 0.5;
		lineSeries.tooltip.label.padding(12,12,12,12)

		// Add scrollbar
		lineChart.scrollbarX = new am4charts.XYChartScrollbar();
		lineChart.scrollbarX.series.push(lineSeries);

		// Add cursor
		lineChart.cursor = new am4charts.XYCursor();
		lineChart.cursor.xAxis = dateAxis;
		lineChart.cursor.snapToSeries = lineSeries;

		// create pie chart
		var pieChart = am4core.create("donutdiv", am4charts.PieChart);
		pieChart.hiddenState.properties.opacity = 0; // this creates initial fade-in

		pieChart.data = [
		  {
		    field: "Doors",
		    value: 401
		  },
		  {
		    field: "Inputs",
		    value: 300
		  },
		  {
		    field: "Outputs",
		    value: 200
		  },
		  {
		    field: "Panels",
		    value: 165
		  },
		  {
		    field: "Cardholders",
		    value: 139
		  },
		  {
		    field: "Users",
		    value: 128
		  }
		];
		pieChart.radius = am4core.percent(70);
		pieChart.innerRadius = am4core.percent(40);
		pieChart.startAngle = 180;
		pieChart.endAngle = 360;  

		var pieSeries = pieChart.series.push(new am4charts.PieSeries());
		pieSeries.dataFields.value = "value";
		pieSeries.dataFields.category = "field";

		pieSeries.slices.template.cornerRadius = 10;
		pieSeries.slices.template.innerCornerRadius = 7;
		pieSeries.slices.template.draggable = true;
		pieSeries.slices.template.inert = true;
		pieSeries.alignLabels = false;

		pieSeries.hiddenState.properties.startAngle = 90;
		pieSeries.hiddenState.properties.endAngle = 90;

		pieSeries.labels.template.disabled = true;
		pieSeries.ticks.template.disabled = true;

		pieChart.legend = new am4charts.Legend();

		// Bar chart
		var barChart = am4core.create("bardiv", am4charts.XYChart);

		barChart.data = [{
		  "region": "AMER",
		  "doors": 250,
		  "inputs": 204,
		  "outputs": 175,
		  "panels": 15,
		  "cardholders": 32
		}, {
		  "region": "EMEA",
		  "doors": 180,
		  "inputs": 155,
		  "outputs": 143,
		  "panels": 19,
		  "cardholders": 10
		}, {
		  "region": "APAC",
		  "doors": 199,
		  "inputs": 140,
		  "outputs": 125,
		  "panels": 15,
		  "cardholders": 18
		}];

		// Create axes
		var categoryAxis = barChart.xAxes.push(new am4charts.CategoryAxis());
		categoryAxis.dataFields.category = "region";
		categoryAxis.renderer.grid.template.location = 0;


		var valueAxis = barChart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.renderer.inside = true;
		valueAxis.renderer.labels.template.disabled = true;
		valueAxis.min = 0;

		// Create series
		function createSeries(field, name) {
		  
		  // Set up series
		  var barSeries = barChart.series.push(new am4charts.ColumnSeries());
		  barSeries.name = name;
		  barSeries.dataFields.valueY = field;
		  barSeries.dataFields.categoryX = "region";
		  barSeries.sequencedInterpolation = true;
		  
		  // Make it stacked
		  barSeries.stacked = true;
		  
		  // Configure columns
		  barSeries.columns.template.width = am4core.percent(60);
		  barSeries.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";
		  
		  // Add label
		  var labelBullet = barSeries.bullets.push(new am4charts.LabelBullet());
		  //labelBullet.label.text = "{valueY}";
		  labelBullet.locationY = 0.5;
		  
		  return barSeries;
		}

		createSeries("doors", "Doors");
		createSeries("inputs", "Inputs");
		createSeries("outputs", "Outputs");
		createSeries("panels", "Panels");
		createSeries("cardholders", "Cardholders");

	}); // end am4core.ready()