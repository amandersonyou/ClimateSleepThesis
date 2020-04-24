// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

var west
var midwest
var southwest
var southeast
var northeast

function preload() {
    west = loadTable('/Data/500_Cities/500_Cities__SleepAsthmaEPA_West.csv', 'csv', 'header')
    midwest = loadTable('/Data/500_Cities/500_Cities__SleepAsthmaEPA_Midwest.csv', 'csv', 'header')
    southwest = loadTable('/Data/500_Cities/500_Cities__SleepAsthmaEPA_Southwest.csv', 'csv', 'header')
    southeast = loadTable('/Data/500_Cities/500_Cities__SleepAsthmaEPA_Southeast.csv', 'csv', 'header')
    northeast = loadTable('/Data/500_Cities/500_Cities__SleepAsthmaEPA_Northeast.csv', 'csv', 'header')
    myFont = loadFont('/Assets/Barlow/Barlow-Light.ttf');
    myFontTitle = loadFont('/Assets/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf');
}

function setup() {
    let c = createCanvas(400, 1750)
    // background('#DBD3D1');
    // background();
    noStroke();
    noLoop();
    ellipseMode();
    // strokeCap(ROUND);

    // colors
    var asthmaHue = "#e17e7b"
    var sleepHue = "#777a9e"
    var textColor = '#222323'
    var rowHeight = 16

    var table_west = west
    var table_midwest = midwest
    var table_southwest = southwest
    var table_southeast = southeast
    var table_northeast = northeast


// labels 
// x = 200
// y = 60
//     textFont(myFont);
//     textSize(14);
//     for (var r=0; r<table_west.getRowCount(); r++){
//         fill(textColor);
//         textAlign(RIGHT);
//         text(table_west.getString(r, 2), x, y)
//         y += rowHeight;
//     }

// WEST
x = 130
y = 50
middle = 12
fill(sleepHue)
for (var r=0; r<table_midwest.getRowCount(); r++){
    var sleepVal = (table_midwest.getNum(r, 3)*5)
    rect(x, y, sleepVal, rowHeight-2)
    y += rowHeight
}

// draw asthma bars per city
x = 130
y = 50
fill(asthmaHue)
for (var r=0; r<table_midwest.getRowCount(); r++){
    var asthmaVal = (table_midwest.getNum(r, 4)*5)
    rect(x, y, asthmaVal, rowHeight-2)
    y += rowHeight
}

// center bar hue for avg median air quality
x = 120
y = 41
for (var r=0; r<table_midwest.getRowCount(); r++){
    var aqiVal = (table_midwest.getNum(r, 6)); 
    alphaCol = map(aqiVal, 0, 1, 0, 255);
    fill(36,102,129,(alphaCol))
    // rect(x, y, aqiVal, row_height-2)
    // fill(textColor)
    ellipse(x, y+rowHeight, 14, 14);
    y += rowHeight
}



// // MIDWEST
// x = 350
// y = 150

// fill(sleepHue)
// for (var r=0; r<table_midwest.getRowCount(); r++){
//     var sleepVal = (table_midwest.getNum(r, 2)*3)
//     rect(x, y, sleepVal, rowHeight-2)
//     y += rowHeight
// }

// // draw asthma bars per city
// x = 330
// y = 150
// fill(asthmaHue)
// for (var r=0; r<table_midwest.getRowCount(); r++){
//     var asthmaVal = (table_midwest.getNum(r, 3)*3)
//     rect(x, y, -asthmaVal, rowHeight-2)
//     y += rowHeight
// }

// // center bar hue for avg median air quality
// x = 334
// y = 150
// for (var r=0; r<table_midwest.getRowCount(); r++){
//     var aqiVal = table_midwest.getNum(r, 4)
//     fill(36,102,129, aqiVal*2)
//     rect(x, y, middle, rowHeight-2, 20)
//     y += rowHeight
// }


// // SOUTHWEST
// x = 600
// y = 150
// fill(sleepHue)
// for (var r=0; r<table_southwest.getRowCount(); r++){
//     var sleepVal = (table_southwest.getNum(r, 2)*3)
//     rect(x, y, sleepVal, rowHeight-2)
//     y += rowHeight
// }

// // draw asthma bars per city
// x = 580
// y = 150
// fill(asthmaHue)
// for (var r=0; r<table_southwest.getRowCount(); r++){
//     var asthmaVal = (table_southwest.getNum(r, 3)*3)
//     rect(x, y, -asthmaVal, rowHeight-2)
//     y += rowHeight
// }

// // center bar hue for avg median air quality
// x = 584
// y = 150
// for (var r=0; r<table_southwest.getRowCount(); r++){
//     var aqiVal = table_southwest.getNum(r, 4)
//     fill(36,102,129, aqiVal*2)
//     rect(x, y, middle, rowHeight-2, 20)
//     y += rowHeight
// }

// // SOUTHEAST
// x = 850
// y = 150
// fill(sleepHue)
// for (var r=0; r<table_southeast.getRowCount(); r++){
//     var sleepVal = (table_southeast.getNum(r, 2)*3)
//     rect(x, y, sleepVal, rowHeight-2)
//     y += rowHeight
// }

// // draw asthma bars per city
// x = 830
// y = 150
// fill(asthmaHue)
// for (var r=0; r<table_southeast.getRowCount(); r++){
//     var asthmaVal = (table_southeast.getNum(r, 3)*3)
//     rect(x, y, -asthmaVal, rowHeight-2)
//     y += rowHeight
// }

// // center bar hue for avg median air quality
// x = 834
// y = 150
// for (var r=0; r<table_southeast.getRowCount(); r++){
//     var aqiVal = table_southeast.getNum(r, 4)
//     fill(36,102,129, aqiVal*2)
//     rect(x, y, middle, rowHeight-2, 20)
//     y += rowHeight
// }


// // NORTHEAST
// x = 1100
// y = 150
// fill(sleepHue)
// for (var r=0; r<table_northeast.getRowCount(); r++){
//     var sleepVal = (table_northeast.getNum(r, 2)*3)
//     rect(x, y, sleepVal, rowHeight-2)
//     y += rowHeight
// }

// // draw asthma bars per city
// x = 1080
// y = 150
// fill(asthmaHue)
// for (var r=0; r<table_northeast.getRowCount(); r++){
//     var asthmaVal = (table_northeast.getNum(r, 3)*3)
//     rect(x, y, -asthmaVal, rowHeight-2)
//     y += rowHeight
// }

// // center bar hue for avg median air quality
// x = 1084
// y = 150
// for (var r=0; r<table_northeast.getRowCount(); r++){
//     var aqiVal = table_northeast.getNum(r, 4)
//     fill(36,102,129, aqiVal*2)
//     rect(x, y, middle, rowHeight-2, 20)
//     y += rowHeight
// }

// saveCanvas(c, 'MV_Midwest', 'png');
}