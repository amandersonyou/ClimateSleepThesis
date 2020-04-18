// WIP if design is altered to be full assortment

// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

var sleepHigh
var asthmaHigh
var totalData

function preload() {
    // sleepHigh = loadTable('/Data/500_Cities/SleepHigh.csv', 'csv', 'header')
    // asthmaHigh = loadTable('/Data/500_Cities/AsthmaHigh.csv', 'csv', 'header')
    totalData = loadTable('/Data/500_Cities/500_Cities__SleepAsthmaEPA.csv', 'csv', 'header')
}

function setup() {
    
    let c = createCanvas(2520, 450)
    background('#DBD3D1');
    noStroke();
    noLoop();

    // colors
    var asthmaHue = "#e17e7b"
    var sleepHue = "#777a9e"


    // var table_sleep = sleepHigh
    // var table_asthma = asthmaHigh
    var table_total = totalData

    var bar_width = 5

    // Top 15 records with highest lacking sleep percent prevelance

    
    x = 10
    y = 210
    fill(sleepHue)
    for (var r=0; r<table_total.getRowCount(); r++){
        var sleepVal = (table_total.getNum(r, 2)*4)
        rect(x, y, bar_width-2, -sleepVal)
        x += bar_width
    }
    
    // draw asthma bars per city
    x = 10
    y = 210
    fill(asthmaHue)
    for (var r=0; r<table_total.getRowCount(); r++){
        var asthmaVal = (table_total.getNum(r, 3)*4)
        rect(x, y, bar_width-2, -asthmaVal)
        x += bar_width
    }

    x = 10
    y = 210
    for (var r=0; r<table_total.getRowCount(); r++){
        var aqiVal = (table_total.getNum(r, 4)*4)
        fill(36,102,129, 140)
        rect(x, y, bar_width-2, aqiVal)
        x += bar_width
    }

    // // Top 15 records with highest current adult asthma prevelance
    // x = 170
    // y = 650
    // for (var r=0; r<table_asthma.getRowCount(); r++){
    //     var aqiVal = (table_asthma.getNum(r, 4)*4)
    //     fill(36,102,129, 140)
    //     rect(x+bar_width, y, bar_width-15, -aqiVal)
    //     x += bar_width
    // }
    
    // x = 200
    // y = 650
    // middle = 12
    // fill(sleepHue)
    // for (var r=0; r<table_asthma.getRowCount(); r++){
    //     var sleepVal = (table_asthma.getNum(r, 2)*4)
    //     rect(x, y, bar_width-25, -sleepVal)
    //     x += bar_width
    // }
    
    // // draw asthma bars per city
    // x = 180
    // y = 650
    // fill(asthmaHue)
    // for (var r=0; r<table_sleep.getRowCount(); r++){
    //     var asthmaVal = (table_asthma.getNum(r, 3)*4)
    //     rect(x+bar_width, y, bar_width-25, -asthmaVal)
    //     x += bar_width
    // }
// saveCanvas(c, 'totalAsthmaHigh', 'png');
}