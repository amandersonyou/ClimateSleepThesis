// WIP if design is altered to be full assortment

// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

// var sleepHigh
// var asthmaHigh
var totalData
var totalData2

function preload() {
    // sleepHigh = loadTable('/Data/500_Cities/SleepHigh.csv', 'csv', 'header')
    // asthmaHigh = loadTable('/Data/500_Cities/AsthmaHigh.csv', 'csv', 'header')
    totalData = loadTable('/Data/500_Cities/500_Cities__SleepAsthmaEPA.csv', 'csv', 'header')
    totalData2 = loadTable('/Data/500_Cities/500_Cities_AsthmaOrderedTotal.csv', 'csv', 'header')
    myFont = loadFont('/Assets/Barlow/Barlow-Light.ttf');
    // myFontTitle = loadFont('/Assets/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf');
}

function setup() {
    
    let c = createCanvas(520, 8100)
    // background('#DBD3D1');
    noStroke();
    noLoop();

    var asthmaHue = "#e17e7b"
    var sleepHue = "#777a9e"
    var textColor = '#222323'
    var row_height = 16
    var table_total = totalData
    var table_total2 = totalData2



// labels 
x = 220
y = 50
    textFont(myFont);
    textSize(15);
    for (var r=0; r<table_total.getRowCount(); r++){
        fill(textColor);
        textAlign(RIGHT);
        text(table_total.getString(r, 2), x, y)
        y += row_height
    }

    // Total Data
    // Median AQI
    x = 235
    y = 50
    for (var r=0; r<table_total.getRowCount(); r++){
        var aqiVal = (table_total.getNum(r, 6));
        alphaCol = map(aqiVal, 0, 1, 0, 255);
        fill(36,102,129,(alphaCol))
        // rect(x, y, aqiVal, row_height-2)
        // fill(textColor)
        ellipse(x, y-5, 15, 12);
        y += row_height
    }
    
    // Sleep Values
    x = 250
    y = 40

    for (var r=0; r<table_total.getRowCount(); r++){
        var sleepVal = (table_total.getNum(r, 3)*5)
        fill(sleepHue)
        rect(x, y, sleepVal, row_height-2)
        textAlign(LEFT);
        fill(textColor)
        // text(table_total.getNum(r, 3),(x+sleepVal+5), y+10)
        y += row_height
    }
    
    // Asthma Values
    x = 250
    y = 40
    fill(asthmaHue)
    for (var r=0; r<table_total.getRowCount(); r++){
        var asthmaVal = (table_total.getNum(r, 4)*5)
        fill(asthmaHue)
        rect(x, y, asthmaVal, row_height-2)
        textAlign(RIGHT);
        fill(textColor)
        // text(table_total.getNum(r, 4),(x+asthmaVal-5), y+10)
        y += row_height
    }


// saveCanvas(c, 'Main_SleepOrdered', 'png');
}





///////////////////////// Code for Legend //////////////

