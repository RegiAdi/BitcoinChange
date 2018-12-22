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

// Get weekly bitcoin historical data
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

        var index = document.createTextNode(parseInt(key) + 1);
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
        var time = document.createTextNode('Time: ' + timeConverter(data[key].time));
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


// Get monthly bitcoin historical data
fetch('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=29&api_key=' + apiKey)
.then(function (response) {
    return response.json();
})
.then(function (response) {
    var data = response.Data;
    console.log(data);

    // show one month historical bitcoin data
    var ul = $('btc-monthly-list');

    Object.keys(data).forEach(function (key) {
        var li = document.createElement('li');

        var index = document.createTextNode(parseInt(key) + 1);
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
        var time = document.createTextNode('Time: ' + timeConverter(data[key].time));
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

// Get 24 hours bitcoin historical data
fetch('https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=23&api_key=' + apiKey)
.then(function (response) {
    return response.json();
})
.then(function (response) {
    var data = response.Data;
    console.log(data);

    // show 24 hours historical bitcoin data
    var ul = $('btc-24hours-list');

    Object.keys(data).forEach(function (key) {
        var li = document.createElement('li');

        var index = document.createTextNode(parseInt(key) + 1);
        li.appendChild(index);

        var dailyDataList = document.createElement('ul');
        var timeLi = document.createElement('li');
        var closeLi = document.createElement('li');
        var highLi = document.createElement('li');
        var lowLi = document.createElement('li');
        var openLi = document.createElement('li');
        var volumefromLi = document.createElement('li');
        var volumetoLi = document.createElement('li');

        var close = document.createTextNode('Close: ' + data[key].close);
        var high = document.createTextNode('High: ' + data[key].high);
        var low = document.createTextNode('Low: ' + data[key].low);
        var open = document.createTextNode('High: ' + data[key].open);
        var time = document.createTextNode('Time: ' + timeConverter(data[key].time));
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
