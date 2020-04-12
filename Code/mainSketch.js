// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

var sleep
var asthma
var alabama

function preload() {
    sleep = loadTable('/Data/500_Cities/500_Cities__Sleeping_less_than_7_hours_among_adults_aged___18_years.csv', 'csv', 'header')
    asthma = loadTable('/Data/500_Cities/500_Cities__Current_asthma_among_adults_aged___18_years.csv', 'csv', 'header')
    alabama = loadTable('/Data/500_Cities/AlabamaTest.csv', 'csv', 'header')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    background('#DBD3D1');
    noStroke();
    // colorMode(HSB);
    // noLoop();

    var table_sleep = sleep
    var table_asthma = asthma
    var table_alabama = alabama

    var rowHeight = 60
    var colWidth = 25

// draw sleep bars per state
x = 100
y = 400
fill(255,102,102,300)
// textStyle(NORMAL)
// textAlign(BOLD)
for (var r=0; r<table_alabama.getRowCount(); r++){
    console.log(table_alabama);
    var sleepVal = table_alabama.getNum(r, 2)
    rect(x, y, colWidth-5, -sleepVal)
    x += colWidth
}

x = 100
y = 400
fill(50)
for (var r=0; r<table_alabama.getRowCount(); r++){
    console.log(table_alabama);
    var sleepVal = table_alabama.getNum(r, 3)
    rect(x, y, colWidth-5, sleepVal)
    x += colWidth
}



}

// function draw() {


// }