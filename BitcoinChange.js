
fetch('https://api.coindesk.com/v1/bpi/currentprice/IDR.json')
.then(function (response) {
    return response.json();
})
.then(function (response) {
    var element = {
        price: document.getElementById('btc-price'),
        rate: {
            idr: document.getElementById('rate-idr'),
            usd: document.getElementById('rate-usd'),
        },
        time: {
            updated: document.getElementById('time-updated'),
            updatedISO: document.getElementById('time-updatediso'),
            updatedUK: document.getElementById('time-updateduk'),
        }
    };

    // BTC Price
    element.price.innerHTML += response.bpi.USD.rate + '/BTC';

    // updating rate element
    element.rate.idr.innerHTML += response.bpi.IDR.rate;
    element.rate.usd.innerHTML += response.bpi.USD.rate;

    // updating time element
    element.time.updated.innerHTML += response.time.updated;
    element.time.updatedISO.innerHTML += response.time.updatedISO;
    element.time.updatedUK.innerHTML += response.time.updateduk;
})
.catch(function (error) {
    console.log('Request Failed!', error);
});

// get one month Bitcoin Price Index
fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
.then(function (response) {
    return response.json();
})
.then(function (response) {
    var ul = document.getElementById('monthly-price');

    // create one month Bitcoin Price Index list
    Object.keys(response.bpi).forEach(function (key) {
        var li = document.createElement('li');
        var dailyPrice = document.createTextNode(key + ': $' + response.bpi[key]);
        li.appendChild(dailyPrice);
        ul.appendChild(li);
    });
});
