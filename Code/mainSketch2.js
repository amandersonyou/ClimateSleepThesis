// WIP if design is altered to be cube grid layout

// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

var data

function preload() {
    data = loadTable('/Data/500_Cities/500_Cities__SleepAsthmaEPA.csv', 'csv', 'header')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    background('#DBD3D1');
    noStroke();
    noLoop();

    // colors
    var asthmaHue = "#ff8a00"
    var sleepHue = "#ee4343"


    var table = data

    var rowHeight = 6
    var bar_width = 8

// drawing each data cube
// x = 100
// y = 200


// for (let y = 0; y < 20; y++) {
//     for (let x = 0; x < 25; x++) {
//     //   ellipse(x * 50 + 25, y * 50 + 25, 10, 10);
//       var sleepVal = (table.getNum(x, 2)*2)
//       rect(x * 50 + 25, y * 50 + 25, bar_width, -sleepVal);
//       x += bar_width+50
//     }
//   }

for (var r=0; r<table.getRowCount(); r++){
    var sleepVal = (table.getNum(r, 2)*3);
}
for (let y = 0; y < 20; y++) {
    for (let x = 0; x < 25; x++) {
    ellipse(x * 50 + 25, y * 50 + 25, 10, sleepVal/5);
    console.log(sleepVal);
    }
}



}