const config1 = document.getElementById('myChart1').getContext('2d');
const myChart = new Chart(config1, {
    type: 'bar',
    data: {
        labels: ['✯ 5 Star', '✯ 4 Star', '✯ 3 Star', '✯ 2 Star', '✯ 1 Star'],
        datasets: [{
            data: [786, 213, 89, 445, 213],
            labels: "none",
            backgroundColor: [
                "rgb(44, 156, 219)",
                "rgb(243, 153, 75)",
                "#F2C94D",
                "#70CF97",
                "#27AE61"
            ],
            responsive: true,
            maintainAspectRatio: true,
            borderWidth: 1,
            borderRadius: 15,
            barPercentage: 1,
        }]
    },
    options: {
        layout: {
            padding: {
                top: 30,
                bottom:30
            }
        },

        plugins: {
            legend :{
                display: false
            }
        },
        scales: {
            y: {
                min: 0,
                ticks: {
                    stepSize: 250
                }
            }
        }
    },
});
/*Configure 2nd Chart */
const config2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(config2,{
    type: "line",
    data: {
            labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,26,27,28,29,30],
            datasets: [
                {
                label: 'Rolling Mean',
                data: [312,331,352,302,343,347,353,545,350,360,760,331,352,302,343,347,353,545,350,360,312,331,352,302,343,347,353,545,350,360,],
                fill:false,
                borderColor: 'blue',
                tension: 0.1
                },
            {
                label: 'Expanding Mean',
                data: [314,332,332,342,353,367,373,335,320,330,352,351,322,332,373,367,333,575,330,320,352,361,332,332,323,337,333,575,330,310,],
                fill:false,
                borderColor: 'yellow',
                tension: 0.1
             },
             {
                label: 'Tweet Sentiment',
                data: [314,332,352,342,353,367,373,465,320,330,352,351,352,332,333,367,333,575,330,320,322,321,322,332,323,337,333,575,330,330,],
                fill:false,
                borderColor: 'red',
                tension: 0.1
             }
            ]
    },
    options: {
        layout: {
            padding: {
                top: 30,
                bottom:30
            }
        },
        scales: {
            y: {
                min: 0,
                ticks: {
                    stepSize: 250
                }
            }
        }
    }
});
/*Configure 3rd Chart */
const config3 = document.getElementById('myChart3').getContext('2d');
const myChart3 = new Chart(config3, {
    type: 'bar',
    data: {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,26,27,28,29,30],
        datasets: [{
            data: [786, 213, 89, 445, 213,242,344,123,564,324,65,34,234,643,123,456,234,786, 213, 89, 445, 213,242,344,123,564,324,230,180],
            labels: "none",
            backgroundColor: [
                "#c0c0c0"
            ],
        }]
    },
    options: {
        layout: {
            padding: {
                top: 40,
                bottom:40
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                min: 0,
                ticks: {
                    stepSize: 250
                }
            }
        }
    },
});