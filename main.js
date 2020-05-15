var ctx = document.getElementById('newChart').getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, '#8888EA');
gradient.addColorStop(0.2, 'rgba(66, 118, 196, 0.5)');
gradient.addColorStop(1, 'rgba(66, 118, 196, 0)');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1910', '1920', '1930', '1940', '1950', '1960', '1970', '1980', '1990'],
        datasets: [{
            label: '# of Votes',
            data: [0, 3, 4, 4, 3.8, 4.6, 5.2, 6, 6.2 ],
            backgroundColor: gradient,
            borderColor: [
                '#8888EA',

            ],
            borderWidth: 5
        },
        ]
    },
    options: {
        scales: {
           xAxes: [{
               gridLines: {
                  drawOnChartArea: false
               }
            }],
            yAxes: [{
               gridLines: {
                  drawOnChartArea: false
               }
            }]
        },
        elements: {
                    point:{
                        radius: 0
                    }
                },
        responsive: true,
        legend: {
            display: false,
        },
    }
});