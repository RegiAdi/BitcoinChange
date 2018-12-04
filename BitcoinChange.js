var apiKey = '9f76eef88d2b7bdd838adbd412dc6c137f2c02bbf932bd20a91f595d85ef4f91';

function $(element) {
    return document.getElementById(element);
}

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

fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD&api_key=' + apiKey)
.then(function (response) {
    return response.json();
})
.then(function (response) {
    var data = response.DISPLAY.BTC.USD;

    $('btc-price').innerHTML = 'Price: ' + data.PRICE;
    $('btc-change24hour').innerHTML = 'Change24hour: ' + data.CHANGE24HOUR;
    $('btc-changeday').innerHTML = 'Changeday: ' + data.CHANGEDAY;
    $('btc-changepct24hour').innerHTML = 'Changepct24hour: ' + data.CHANGEPCT24HOUR;
    $('btc-changepctday').innerHTML = 'Changepctday: ' + data.CHANGEPCTDAY;
    $('btc-high24hour').innerHTML = 'High24hour: ' + data.HIGH24HOUR;
    $('btc-highday').innerHTML = 'Highday: ' + data.HIGHDAY;
    $('btc-lastmarket').innerHTML = 'Lastmarket: ' + data.LASTMARKET;
    $('btc-lasttradeid').innerHTML = 'Lasttradeid: ' + data.LASTTRADEID;
    $('btc-lastupdate').innerHTML = 'Lastupdate: ' + data.LASTUPDATE;
    $('btc-lastvolume').innerHTML = 'Lastvolume: ' + data.LASTVOLUME;
    $('btc-lastvolumeto').innerHTML = 'Lastvolumeto: ' + data.LASTVOLUMETO;
    $('btc-low24hour').innerHTML = 'Low24hour: ' + data.LOW24HOUR;
    $('btc-lowday').innerHTML = 'Lowday: ' + data.LOWDAY;
    $('btc-market').innerHTML = 'Market: ' + data.MARKET;
    $('btc-mktcap').innerHTML = 'Mktcap: ' + data.MKTCAP;
    $('btc-open24hour').innerHTML = 'Open24hour: ' + data.OPEN24HOUR;
    $('btc-openday').innerHTML = 'Openday: ' + data.OPENDAY;
    $('btc-supply').innerHTML = 'Supply: ' + data.SUPPLY;
    $('btc-totalvolume24h').innerHTML = 'Totalvolume24h: ' + data.TOTALVOLUME24H;
    $('btc-totalvolume24hto').innerHTML = 'Totalvolume24hto: ' + data.TOTALVOLUME24HTO;
    $('btc-volume24hour').innerHTML = 'Volume24hour: ' + data.VOLUME24HOUR;
    $('btc-volume24hourto').innerHTML = 'Volume24hourto: ' + data.VOLUME24HOURTO;
    $('btc-volumeday').innerHTML = 'Volumeday: ' + data.VOLUMEDAY;
    $('btc-volumedayto').innerHTML = 'Volumedayto: ' + data.VOLUMEDAYTO;
    console.log(response.DISPLAY.BTC.USD);
})
.catch(function (error) {
    console.log('Request Failed!', error);
});
