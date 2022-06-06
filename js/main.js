// BAR CHART
// require.config({
//   paths: {
//     "jquery": "https://code.jquery.com/jquery-2.2.4.min",
//     "moment": "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.14.1/moment",
//     "chartjs": "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.6/Chart.bundle"
//   },
//   shim: {
// 		jquery: {
// 			exports: "$"
//     }
//   }
// });
//
// require(['jquery', 'moment', 'chartjs'], function($ ,moment, Chart) {
//
//   function newDate(days) {
// 		return moment().add(days, 'd').toDate();
// 	}
//
//   var config = {
//     type: 'bar',
//     data: {
//       labels: [newDate(-5), newDate(-4), newDate(-3), newDate(-2), newDate(-1), newDate(0)],
//       datasets: [{
//         data: [2, 5, 3, 4, 7, 3],
//         borderColor: "rgba(220,20,20,1)",
//         backgroundColor: "rgba(220,20,20,0.5)"
//       }]
//     },
//     options: {
//       scales: {
//         xAxes: [{
//           type: "time",
//           time: {
//             unit: 'day',
//             round: 'day',
//             displayFormats: {
//               day: 'MMM D'
//             }
//           }
//         }],
//         yAxes: [{
//           ticks: {
//             beginAtZero: true
//           }
//         }]
//       }
//     }
//   }
//
//   var ctx = document.getElementById("canvas").getContext("2d");
// 	window.myLine = new Chart(ctx, config);
//
// });


// DONUT CHART
// window.chartColors = {
// 	red: 'rgb(255, 99, 132)',
// 	orange: 'rgb(255, 159, 64)',
// 	yellow: 'rgb(255, 205, 86)',
// 	green: 'rgb(75, 192, 192)',
// 	blue: 'rgb(54, 162, 235)',
// 	purple: 'rgb(153, 102, 255)',
// 	grey: 'rgb(231,233,237)'
// };
//
// Chart.defaults.global.tooltips.custom = function(tooltip) {
//   // Tooltip Element
//   var tooltipEl = document.getElementById('chartjs-tooltip');
//
//   // Hide if no tooltip
//   if (tooltip.opacity === 0) {
//     tooltipEl.style.opacity = 0;
//     return;
//   }
//
//   // Set Text
//   if (tooltip.body) {
//     var total = 0;
//
//     // get the value of the datapoint
//     var value = this._data.datasets[tooltip.dataPoints[0].datasetIndex].data[tooltip.dataPoints[0].index].toLocaleString();
//
//     // calculate value of all datapoints
//   this._data.datasets[tooltip.dataPoints[0].datasetIndex].data.forEach(function(e) {
//       total += e;
//     });
//
//     // calculate percentage and set tooltip value
//     tooltipEl.innerHTML = '<h1>' + (value / total * 100) + '%</h1>';
//   }
//
//   // calculate position of tooltip
//   var centerX = (this._chartInstance.chartArea.left + this._chartInstance.chartArea.right) / 2;
//   var centerY = ((this._chartInstance.chartArea.top + this._chartInstance.chartArea.bottom) / 2);
//
//   // Display, position, and set styles for font
//   tooltipEl.style.opacity = 1;
//   tooltipEl.style.left = centerX + 'px';
//   tooltipEl.style.top = centerY + 'px';
//   tooltipEl.style.fontFamily = tooltip._fontFamily;
//   tooltipEl.style.fontSize = tooltip.fontSize;
//   tooltipEl.style.fontStyle = tooltip._fontStyle;
//   tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
// };
//
// var config = {
//   type: 'doughnut',
//   data: {
//     datasets: [{
//       data: [300, 50, 100, 40, 10],
//       backgroundColor: [
//         window.chartColors.red,
//         window.chartColors.orange,
//         window.chartColors.yellow,
//         window.chartColors.green,
//         window.chartColors.blue,
//       ],
//     }],
//     labels: [
//       "Red",
//       "Orange",
//       "Yellow",
//       "Green",
//       "Blue"
//     ]
//   },
//   options: {
//     responsive: true,
//     legend: {
//       display: true,
//       labels: {
//         padding: 20
//       },
//     },
//     tooltips: {
//       enabled: false,
//     }
//   }
// };
//
// window.onload = function() {
//     var ctx = document.getElementById("chart-area").getContext("2d");
//     window.myPie = new Chart(ctx, config);
// };




var canvasElement = document.getElementById('cookieChart');

var config = {
  type: 'bar',
  data : {
    labels: ["Jan", "Feb", "Mar", "April", "May"],
    datasets: [
      {label: 'Shipments by user', data: [15, 8, 16, 12, 14] }],
  },
};

var cookieChart = new Chart(canvasElement, config)
