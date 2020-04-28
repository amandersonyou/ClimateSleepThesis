// p5 sketch showing increased health risks for insufficient sleep
// data source: https://www.cdc.gov/sleep/data_statistics.html
var data

function preload() {
    data = loadTable('/Data/CDC/HealthConditionsSleep.csv', 'csv', 'header'),
    myFont = loadFont('/Assets/Barlow/Barlow-Light.ttf');
}

function setup() {
    let c = createCanvas(700, 400);
    // background('#DBD3D1');
    stroke(131, 131, 169);
    ellipseMode();

    var table = data



//////////// Risk Factors
// x = 80
// y = 50
// gap = 140
// for (var r=10; r<14; r++){
//     fill(131, 131, 169, 200);
//     var IS = (table.getNum(r, 1))*4;
//     arc(x, y, IS, IS, 0, PI + QUARTER_PI-.79, CHORD);
//     fill(131, 131, 169, 120);
//     var SS = (table.getNum(r, 4))*3;
//     ellipse(x, y, SS, SS);
//     x += gap;
// }


//////////// Chronic Health Conditions 

x = 30
y = 200
gap = 120

for (var r=0; r<5; r++){
    fill(131, 131, 169, 200);
    var IS = (table.getNum(r, 1))*4;
    arc(x, y, IS, IS, 0, PI + QUARTER_PI-.79, CHORD);
    fill(131, 131, 169, 120);
    var SS = (table.getNum(r, 4))*3;
    ellipse(x, y, SS, SS);
    x += gap;
}



//////////// Chronic Health Conditions 2nd Row

x = 30
y = 325
gap = 120

for (var r=5; r<10; r++){
    fill(131, 131, 169, 200);
    var IS = (table.getNum(r, 1))*4;
    arc(x, y, IS, IS, 0, PI + QUARTER_PI-.79, CHORD);
    fill(131, 131, 169, 120);
    var SS = (table.getNum(r, 4))*3;
    ellipse(x, y, SS, SS);
    x += gap;
}
//  saveCanvas(c, 'healthSleepChronic', 'png');


}


////////// Original solution ///////////

// x = 220
// y = 30
// gap = 85

// // Insufficient Sleep
//     for (var r=0; r<table.getRowCount(); r++){
//         fill(textColor);
//         text(table.getString(r, 0), x-70, y)
//         fill(131, 131, 169, 100);
//         var lowNS = (table.getNum(r, 2))*3;
//         ellipse(x, y, lowNS, lowNS);
//         fill(131, 131, 169, 200);
//         var highNS = (table.getNum(r, 3))*3;
//         ellipse(x, y, highNS, highNS);
//         y += gap;
//     }


//     // Sufficient Sleep
//     x = 320
//     y = 30
//     for (var r=0; r<table.getRowCount(); r++){
//         fill(131, 131, 169, 100);
//         var lowSS = (table.getNum(r, 5))*3;
//         ellipse(x, y, lowSS, lowSS);
//         fill(131, 131, 169, 200);
//         var highSS = (table.getNum(r, 6))*3;
//         ellipse(x, y, highSS, highSS);
//         y += gap;
//     }

    // saveCanvas(c, 'healthSleep', 'png');
// }