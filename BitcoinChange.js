var apiKey = '9f76eef88d2b7bdd838adbd412dc6c137f2c02bbf932bd20a91f595d85ef4f91';

function $(element) {
    return document.getElementById(element);
}

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
})
.catch(function (error) {
    console.log('Request Failed!', error);
});

fetch('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=6&api_key=' + apiKey)
.then(function (response) {
    return response.json();
})
.then(function (response) {
    var data = response.Data;
    console.log(data);

    // show one week historical bitcoin data
    var ul = $('btc-weekly-list');

    Object.keys(data).forEach(function (key) {
        var li = document.createElement('li');

        var index = document.createTextNode(key);
        li.appendChild(index);

        var dailyDataList = document.createElement('ul');
        var closeLi = document.createElement('li');
        var highLi = document.createElement('li');
        var lowLi = document.createElement('li');
        var openLi = document.createElement('li');
        var timeLi = document.createElement('li');
        var volumefromLi = document.createElement('li');
        var volumetoLi = document.createElement('li');

        var close = document.createTextNode('Close: ' + data[key].close);
        var high = document.createTextNode('High: ' + data[key].high);
        var low = document.createTextNode('Low: ' + data[key].low);
        var open = document.createTextNode('High: ' + data[key].open);
        var time = document.createTextNode('Time: ' + data[key].time);
        var volumefrom = document.createTextNode('Volumefrom: ' + data[key].volumefrom);
        var volumeto = document.createTextNode('Volumeto: ' + data[key].volumeto);

        closeLi.appendChild(close);
        highLi.appendChild(high);
        lowLi.appendChild(low);
        openLi.appendChild(open);
        timeLi.appendChild(time);
        volumefromLi.appendChild(volumefrom);
        volumetoLi.appendChild(volumeto);

        dailyDataList.appendChild(closeLi);
        dailyDataList.appendChild(highLi);
        dailyDataList.appendChild(lowLi);
        dailyDataList.appendChild(openLi);
        dailyDataList.appendChild(timeLi);
        dailyDataList.appendChild(volumefromLi);
        dailyDataList.appendChild(volumetoLi);

        li.appendChild(dailyDataList);

        ul.appendChild(li);
    });
})
.catch(function (error) {
    console.log('Request Failed!', error);
});
