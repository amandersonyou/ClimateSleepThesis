// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

var west
var midwest
var south
var northeast

function preload() {
    west = loadTable('/Data/500_Cities/500_Cities__SleepAsthmaEPA_West.csv', 'csv', 'header')
    midwest = loadTable('/Data/500_Cities/500_Cities__SleepAsthmaEPA_Midwest.csv', 'csv', 'header')
    south = loadTable('/Data/500_Cities/500_Cities__SleepAsthmaEPA_South.csv', 'csv', 'header')
    northeast = loadTable('/Data/500_Cities/500_Cities__SleepAsthmaEPA_Northeast.csv', 'csv', 'header')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    background('#DBD3D1');
    noStroke();
    noLoop();

    // colors
    var asthmaHue = "#ff8a00"
    var sleepHue = "#ee4343"

    var table_west = west
    var table_midwest = midwest
    var table_south = south
    var table_northeast = northeast

    var rowHeight = 6


// WEST
x = 100
y = 50
middle = 20
fill(sleepHue)
for (var r=0; r<table_west.getRowCount(); r++){
    var sleepVal = (table_west.getNum(r, 2)*3)
    rect(x, y, sleepVal, rowHeight-2)
    y += rowHeight
}

// draw asthma bars per city
x = 80
y = 50
fill(asthmaHue)
for (var r=0; r<table_west.getRowCount(); r++){
    var asthmaVal = (table_west.getNum(r, 3)*3)
    rect(x, y, -asthmaVal, rowHeight-2)
    y += rowHeight
}

// center bar hue for avg median air quality
x = 80
y = 50
for (var r=0; r<table_west.getRowCount(); r++){
    var aqiVal = table_west.getNum(r, 4)
    fill(42,87,198, aqiVal)
    rect(x, y, middle, rowHeight)
    y += rowHeight
}



// MIDWEST
x = 350
y = 50
middle = 20
fill(sleepHue)
for (var r=0; r<table_midwest.getRowCount(); r++){
    var sleepVal = (table_midwest.getNum(r, 2)*3)
    rect(x, y, sleepVal, rowHeight-2)
    y += rowHeight
}

// draw asthma bars per city
x = 330
y = 50
fill(asthmaHue)
for (var r=0; r<table_midwest.getRowCount(); r++){
    var asthmaVal = (table_midwest.getNum(r, 3)*3)
    rect(x, y, -asthmaVal, rowHeight-2)
    y += rowHeight
}

// center bar hue for avg median air quality
x = 330
y = 50
for (var r=0; r<table_midwest.getRowCount(); r++){
    var aqiVal = table_midwest.getNum(r, 4)
    fill(42,87,198, aqiVal)
    rect(x, y, middle, rowHeight)
    y += rowHeight
}


// SOUTH
x = 600
y = 50
middle = 20
fill(sleepHue)
for (var r=0; r<table_south.getRowCount(); r++){
    var sleepVal = (table_south.getNum(r, 2)*3)
    rect(x, y, sleepVal, rowHeight-2)
    y += rowHeight
}

// draw asthma bars per city
x = 580
y = 50
fill(asthmaHue)
for (var r=0; r<table_south.getRowCount(); r++){
    var asthmaVal = (table_south.getNum(r, 3)*3)
    rect(x, y, -asthmaVal, rowHeight-2)
    y += rowHeight
}

// center bar hue for avg median air quality
x = 580
y = 50
for (var r=0; r<table_south.getRowCount(); r++){
    var aqiVal = table_south.getNum(r, 4)
    fill(42,87,198, aqiVal)
    rect(x, y, middle, rowHeight)
    y += rowHeight
}


// NORTHEAST
x = 850
y = 50
middle = 20
fill(sleepHue)
for (var r=0; r<table_northeast.getRowCount(); r++){
    var sleepVal = (table_northeast.getNum(r, 2)*3)
    rect(x, y, sleepVal, rowHeight-2)
    y += rowHeight
}

// draw asthma bars per city
x = 830
y = 50
fill(asthmaHue)
for (var r=0; r<table_northeast.getRowCount(); r++){
    var asthmaVal = (table_northeast.getNum(r, 3)*3)
    rect(x, y, -asthmaVal, rowHeight-2)
    y += rowHeight
}

// center bar hue for avg median air quality
x = 830
y = 50
for (var r=0; r<table_northeast.getRowCount(); r++){
    var aqiVal = table_northeast.getNum(r, 4)
    fill(42,87,198, aqiVal)
    rect(x, y, middle, rowHeight)
    y += rowHeight
}

}

