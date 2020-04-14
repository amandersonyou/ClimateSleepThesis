// WIP if design is altered to be cube grid layout

// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

var sleepHigh
var asthmaHigh

function preload() {
    sleepHigh = loadTable('/Data/500_Cities/SleepHigh.csv', 'csv', 'header')
    asthmaHigh = loadTable('/Data/500_Cities/AsthmaHigh.csv', 'csv', 'header')
}

function setup() {
    let c = createCanvas(1000, 1000)
    // background('#DBD3D1');
    noStroke();
    noLoop();

    // colors
    var asthmaHue = "#e17e7b"
    var sleepHue = "#777a9e"
    


    var table_sleep = sleepHigh
    var table_asthma = asthmaHigh

    var bar_width = 40

    // Top 15 records with highest lacking sleep percent prevelance
    x = 170
    y = 350
    for (var r=0; r<table_sleep.getRowCount(); r++){
        var aqiVal = (table_sleep.getNum(r, 4)*4)
        fill(36,102,129, 140)
        rect(x+bar_width, y, bar_width-15, -aqiVal)
        x += bar_width
    }
    
    x = 200
    y = 350
    middle = 12
    fill(sleepHue)
    for (var r=0; r<table_sleep.getRowCount(); r++){
        var sleepVal = (table_sleep.getNum(r, 2)*4)
        rect(x, y, bar_width-25, -sleepVal)
        x += bar_width
    }
    
    // draw asthma bars per city
    x = 180
    y = 350
    fill(asthmaHue)
    for (var r=0; r<table_sleep.getRowCount(); r++){
        var asthmaVal = (table_sleep.getNum(r, 3)*4)
        rect(x+bar_width, y, bar_width-25, -asthmaVal)
        x += bar_width
    }

    // Top 15 records with highest current adult asthma prevelance
    x = 170
    y = 650
    for (var r=0; r<table_asthma.getRowCount(); r++){
        var aqiVal = (table_asthma.getNum(r, 4)*4)
        fill(36,102,129, 140)
        rect(x+bar_width, y, bar_width-15, -aqiVal)
        x += bar_width
    }
    
    x = 200
    y = 650
    middle = 12
    fill(sleepHue)
    for (var r=0; r<table_asthma.getRowCount(); r++){
        var sleepVal = (table_asthma.getNum(r, 2)*4)
        rect(x, y, bar_width-25, -sleepVal)
        x += bar_width
    }
    
    // draw asthma bars per city
    x = 180
    y = 650
    fill(asthmaHue)
    for (var r=0; r<table_sleep.getRowCount(); r++){
        var asthmaVal = (table_asthma.getNum(r, 3)*4)
        rect(x+bar_width, y, bar_width-25, -asthmaVal)
        x += bar_width
    }
saveCanvas(c, 'Select15', 'png');
}