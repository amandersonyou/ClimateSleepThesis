// p5 sketch showing increased health risks for insufficient sleep
var data

function preload() {
    data = loadTable('/Data/CDC/HealthConditionsSleep.csv', 'csv', 'header'),
    myFont = loadFont('/Assets/Barlow/Barlow-Light.ttf');
}

function setup() {
    let c = createCanvas(400, 850);
    // background('#DBD3D1');
    stroke(131, 131, 169);

    var table = data
    var textColor = '#222323'

    // Labels
    textFont(myFont);
    textAlign(RIGHT);
    textSize(14);
    


    x = 220
    y = 30
    gap = 85

// Insufficient Sleep
    for (var r=0; r<table.getRowCount(); r++){
        fill(textColor);
        text(table.getString(r, 0), x-70, y)
        fill(131, 131, 169, 100);
        var lowNS = (table.getNum(r, 2))*3;
        ellipse(x, y, lowNS, lowNS);
        fill(131, 131, 169, 200);
        var highNS = (table.getNum(r, 3))*3;
        ellipse(x, y, highNS, highNS);
        y += gap;
    }

    rect(2)

    // Sufficient Sleep
    x = 320
    y = 30
    for (var r=0; r<table.getRowCount(); r++){
        fill(131, 131, 169, 100);
        var lowSS = (table.getNum(r, 5))*3;
        ellipse(x, y, lowSS, lowSS);
        fill(131, 131, 169, 200);
        var highSS = (table.getNum(r, 6))*3;
        ellipse(x, y, highSS, highSS);
        y += gap;
    }

    // saveCanvas(c, 'healthSleep', 'png');
}