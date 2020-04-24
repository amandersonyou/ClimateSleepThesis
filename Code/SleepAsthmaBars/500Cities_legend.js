// legend, to be completed in Ai
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

var totalData
var totalData2

function preload() {
    totalData = loadTable('/Data/500_Cities/500_Cities__SleepAsthmaEPA.csv', 'csv', 'header')
}

function setup() {
    
    let c = createCanvas(400, 300)
    // background('#DBD3D1');
    noStroke();
    noLoop();

    var asthmaHue = "#e17e7b"
    var sleepHue = "#777a9e"
    var row_height = 16
    var table_total = totalData


    // Total Data
    // Median AQI
    x = 105
    y = 162
    for (var r=0; r<1; r++){
        var aqiVal = (table_total.getNum(r, 6));
        alphaCol = map(aqiVal, 0, 1, 0, 255);
        fill(36,102,129,(alphaCol))
        ellipse(x, y-5, 14, 14);
        y += row_height
    }

    // Sleep Values
    x = 120
    y = 150

    for (var r=0; r<1; r++){
        var sleepVal = (table_total.getNum(r, 3)*5)
        fill(sleepHue)
        rect(x, y, sleepVal, row_height-2)
        y += row_height
    }

    // Asthma Values
    x = 120
    y = 150
    fill(asthmaHue)
    for (var r=0; r<1; r++){
        var asthmaVal = (table_total.getNum(r, 4)*5)
        fill(asthmaHue)
        rect(x, y, asthmaVal, row_height-2)
    }


    // AQI range
    x = 80
    y = 270
    for (var r=0; r<1; r++){
        var aqiVal = (.2);
        alphaCol = map(aqiVal, 0, 1, 0, 255);
        fill(36,102,129,(alphaCol))
        ellipse(x, y-5, 14, 14);
    } 
    x = 110
    y = 270
    for (var r=0; r<1; r++){
        var aqiVal = (.4);
        alphaCol = map(aqiVal, 0, 1, 0, 255);
        fill(36,102,129,(alphaCol))
        ellipse(x, y-5, 14, 14);
    } 
    x = 140
    y = 270
    for (var r=0; r<1; r++){
        var aqiVal = (.6);
        alphaCol = map(aqiVal, 0, 1, 0, 255);
        fill(36,102,129,(alphaCol))
        ellipse(x, y-5, 14, 14);
    } 
    x = 170
    y = 270
    for (var r=0; r<1; r++){
        var aqiVal = (.8);
        alphaCol = map(aqiVal, 0, 1, 0, 255);
        fill(36,102,129,(alphaCol))
        ellipse(x, y-5, 14, 14);
    } 
    x = 200
    y = 270
    for (var r=0; r<1; r++){
        var aqiVal = (1);
        alphaCol = map(aqiVal, 0, 1, 0, 255);
        fill(36,102,129,(alphaCol))
        ellipse(x, y-5, 14, 14);
    } 
    // saveCanvas(c, 'legend', 'png');
}
