// version where data is divided into regions and vertical
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
var sleepHigh
var sleepLow
var asthmaHigh
var asthmaLow
// var width = 420
// var height = 500

function preload() {
    sleepHigh = loadTable('/Data/500_Cities/SleepHigh.csv', 'csv', 'header');
    sleepLow = loadTable('/Data/500_Cities/SleepLow.csv', 'csv', 'header');
    asthmaHigh = loadTable('/Data/500_Cities/AsthmaHigh.csv', 'csv', 'header');
    asthmaLow=loadTable('/Data/500_Cities/AsthmaLow.csv', 'csv', 'header');
    myFont = loadFont('/Assets/Barlow/Barlow-Light.ttf');
    myFontTitle = loadFont('/Assets/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf');
}

function setup() {
    let c = createCanvas(420, 475)
    // background(219, 211, 209, 178);
    noStroke();

    

    // colors
    var asthmaHue = "#e17e7b"
    var sleepHue = "#777a9e"
    var rowHeight = 25
    var textColor = '#222323'

    // tables
    var table_SH = sleepHigh
    var table_SL = sleepLow
    var table_AH = asthmaHigh
    var table_AL = asthmaLow


// Sleep High
x = 190
y = 100

// Labels 
textFont(myFontTitle);
textAlign(CENTER);
textSize(22);
text('Highest Lack of Sleep Prevelance', 210, y-80);



textFont(myFont);
textSize(16);
for (var r=0; r<table_SH.getRowCount(); r++){
    fill(textColor);
    textAlign(RIGHT);
    text(table_SH.getString(r, 2), x, y)
    text(table_SH.getNum(r, 5), x+50, y)
    y += rowHeight
}

x = 260
y = 85

for (var r=0; r<table_SH.getRowCount(); r++){
    var sleepVal = (table_SH.getNum(r, 3)*3)
    fill(sleepHue)
    rect(x, y, sleepVal, rowHeight-5)
    y += rowHeight
}

// draw asthma bars per city
x = 260
y = 85
fill(asthmaHue)
for (var r=0; r<table_SH.getRowCount(); r++){
    var asthmaVal = (table_SH.getNum(r, 4)*3)
    rect(x, y, asthmaVal, rowHeight-5)
    y += rowHeight
}

// center bar hue for avg median air quality
// x = 84
// y = 150
// for (var r=0; r<table_west.getRowCount(); r++){
//     var aqiVal = table_west.getNum(r, 4)
//     fill(36,102,129, aqiVal*2)
//     rect(x, y, middle, rowHeight-2, 20)
//     y += rowHeight
// }


// saveCanvas(c, 'miniVisSH', 'png');
}




































// // version where data is divided into regions and vertical
// // require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// console.log("test")
// var west
// var midwest
// var south
// var northeast

// function preload() {
//     west = loadTable('/Data/500_Cities/500_Cities__SleepAsthmaEPA_West.csv', 'csv', 'header')
//     midwest = loadTable('/Data/500_Cities/500_Cities__SleepAsthmaEPA_Midwest.csv', 'csv', 'header')
//     southwest = loadTable('/Data/500_Cities/500_Cities__SleepAsthmaEPA_Southwest.csv', 'csv', 'header')
//     southeast = loadTable('/Data/500_Cities/500_Cities__SleepAsthmaEPA_Southeast.csv', 'csv', 'header')
//     northeast = loadTable('/Data/500_Cities/500_Cities__SleepAsthmaEPA_Northeast.csv', 'csv', 'header')
// }

// function setup() {
//     let c = createCanvas(1400, 1700)
//     // background(219, 211, 209, 178);
//     // background();
//     noStroke();

//     // colors
//     var asthmaHue = "#e17e7b"
//     var sleepHue = "#777a9e"
//     var rowHeight = 7.5

//     var table_west = west
//     var table_midwest = midwest
//     var table_southwest = southwest
//     var table_southeast = southeast
//     var table_northeast = northeast

// // WEST
// x = 100
// y = 150
// middle = 12
// fill(sleepHue)
// for (var r=0; r<table_west.getRowCount(); r++){
//     var sleepVal = (table_west.getNum(r, 2)*3)
//     rect(x, y, sleepVal, rowHeight-2)
//     y += rowHeight
// }

// // draw asthma bars per city
// x = 80
// y = 150
// fill(asthmaHue)
// for (var r=0; r<table_west.getRowCount(); r++){
//     var asthmaVal = (table_west.getNum(r, 3)*3)
//     rect(x, y, -asthmaVal, rowHeight-2)
//     y += rowHeight
// }

// // center bar hue for avg median air quality
// x = 84
// y = 150
// for (var r=0; r<table_west.getRowCount(); r++){
//     var aqiVal = table_west.getNum(r, 4)
//     fill(36,102,129, aqiVal*2)
//     rect(x, y, middle, rowHeight-2, 20)
//     y += rowHeight
// }



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

// // saveCanvas(c, 'mainvis', 'png');
// }

