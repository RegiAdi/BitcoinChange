var apiKey = '9f76eef88d2b7bdd838adbd412dc6c137f2c02bbf932bd20a91f595d85ef4f91';

function $(element) {
    return document.getElementById(element);
}

function displayData(element, data) {
    document.querySelector(element).innerHTML = data;
}

function timeConverter(unixTimestamp) {
    // multiply unix timestamp by 1000 to convert to miliseconds
    var date = new Date(unixTimestamp * 1000);

    return date;
}

// Get bitcoin trading info
fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD&api_key=' + apiKey)
.then(function (response) {
    return response.json();
})
.then(function (response) {
    console.log(response);
    var data = response.DISPLAY.BTC.USD;

    displayData("#bitcoin-price p", data.PRICE);
    displayData("#change-24h p", data.CHANGE24HOUR);
    displayData("#change-24h p:last-child", data.CHANGEPCT24HOUR + "%");
    displayData("#open-24h p", data.OPEN24HOUR);
    displayData("#high-24h p", data.HIGH24HOUR);
    displayData("#low-24h p", data.LOW24HOUR);

    displayData("#change-day p", data.CHANGEDAY);
    displayData("#change-day p:last-child", data.CHANGEPCTDAY + "%");
    displayData("#open-day p", data.OPENDAY);
    displayData("#high-day p", data.HIGHDAY);
    displayData("#low-day p", data.LOWDAY);

    displayData("#market-cap p", data.MKTCAP);
    displayData("#volume-24h p", data.VOLUME24HOUR);
    displayData("#volume-24h p:last-child", data.VOLUME24HOURTO);
    displayData("#total-volume-24h p", data.TOTALVOLUME24H);
    displayData("#total-volume-24h p:last-child", data.TOTALVOLUME24HTO);
    displayData("#volume-day p", data.VOLUMEDAY);
    displayData("#volume-day p:last-child", data.VOLUMEDAYTO);
    displayData("#last-volume p", data.LASTVOLUME);
    displayData("#last-volume p:last-child", data.LASTVOLUMETO);

    displayData("#supply p", data.SUPPLY);
    displayData("#market p", data.MARKET);
    displayData("#last-trade-id p", data.LASTTRADEID);
    displayData("#last-market p", data.LASTMARKET);
})
.catch(function (error) {
    console.log('Request Failed!', error);
});




const buttonWeekly = document.querySelector('#button-weekly-chart');
const buttonMonthly = document.querySelector('#button-monthly-chart');
const button24Hour = document.querySelector('#button-24h-chart');

var chartData = [];
var chartLabels = [];
var index = 0;

// Get weekly bitcoin historical data
fetch('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=6&api_key=' + apiKey)
.then(function (response) {
    return response.json();
})
.then(function (response) {
    var data = response.Data;
    console.log(data);

    chartData = [];
    chartLabels = [];
    index = 0;

    Object.keys(data).forEach(function (key) {
        chartData[index] = data[key].open;
        //chartLabels[index] = timeConverter(data[key].time).getDate();
        chartLabels[index] = timeConverter(data[key].time).toLocaleString();
            //(timeConverter(data[key].time).getHours()) + ":" +
            //(timeConverter(data[key].time).getMinutes()) + " " +
            //(timeConverter(data[key].time).getDate()) + " ";

        index += 1;
    });

    console.log("Data: " + chartData);
    console.log("Labels: " + chartLabels);

    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartLabels,
            datasets: [{
                label: '# of Votes',
                data: chartData,
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                lineTension: 0,
                fill: false
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                    }
                }]
            },
            maintainAspectRatio: false,
        }
    });
})
.catch(function (error) {
    console.log('Request Failed!', error);
});

buttonWeekly.addEventListener('click', function (e) {
    // Get weekly bitcoin historical data
    fetch('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=6&api_key=' + apiKey)
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        var data = response.Data;
        console.log(data);

        chartData = [];
        chartLabels = [];
        index = 0;

        Object.keys(data).forEach(function (key) {
            chartData[index] = data[key].open;
            //chartLabels[index] = timeConverter(data[key].time).getDate();
            chartLabels[index] = timeConverter(data[key].time).toLocaleString();
                //(timeConverter(data[key].time).getHours()) + ":" +
                //(timeConverter(data[key].time).getMinutes()) + " " +
                //(timeConverter(data[key].time).getDate()) + " ";

            index += 1;
        });

        console.log("Data: " + chartData);
        console.log("Labels: " + chartLabels);

        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: chartLabels,
                datasets: [{
                    label: '# of Votes',
                    data: chartData,
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    lineTension: 0,
                    fill: false
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false,
                        }
                    }]
                },
                maintainAspectRatio: false,
            }
        });
    })
    .catch(function (error) {
        console.log('Request Failed!', error);
    });
});

buttonMonthly.addEventListener('click', function (e) {
    // Get monthly bitcoin historical data
    fetch('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=29&api_key=' + apiKey)
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        var data = response.Data;
        console.log(data);

        chartData = [];
        chartLabels = [];
        index = 0;

        Object.keys(data).forEach(function (key) {
            chartData[index] = data[key].open;
            chartLabels[index] = timeConverter(data[key].time).getDate();
            //chartLabels[index] = timeConverter(data[key].time).toLocaleString();
                //(timeConverter(data[key].time).getHours()) + ":" +
                //(timeConverter(data[key].time).getMinutes()) + " " +
                //(timeConverter(data[key].time).getDate()) + " ";

            index += 1;
        });

        console.log("Data: " + chartData);
        console.log("Labels: " + chartLabels);

        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: chartLabels,
                datasets: [{
                    label: '# of Votes',
                    data: chartData,
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    lineTension: 0,
                    fill: false
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false,
                        }
                    }]
                },
                maintainAspectRatio: false,
            }
        });
    })
    .catch(function (error) {
        console.log('Request Failed!', error);
    });
});

button24Hour.addEventListener('click', function (e) {
    // Get 24 hours bitcoin historical data
    fetch('https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=23&api_key=' + apiKey)
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        var data = response.Data;
        console.log(data);

        chartData = [];
        chartLabels = [];
        index = 0;

        Object.keys(data).forEach(function (key) {
            chartData[index] = data[key].open;
            chartLabels[index] = timeConverter(data[key].time).getHours();
            //chartLabels[index] = timeConverter(data[key].time).toLocaleString();
                //(timeConverter(data[key].time).getHours()) + ":" +
                //(timeConverter(data[key].time).getMinutes()) + " " +
                //(timeConverter(data[key].time).getDate()) + " ";

            index += 1;
        });

        console.log("Data: " + chartData);
        console.log("Labels: " + chartLabels);

        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: chartLabels,
                datasets: [{
                    label: '# of Votes',
                    data: chartData,
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    lineTension: 0,
                    fill: false
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false,
                        }
                    }]
                },
                maintainAspectRatio: false,
            }
        });
    })
    .catch(function (error) {
        console.log('Request Failed!', error);
    });
});



