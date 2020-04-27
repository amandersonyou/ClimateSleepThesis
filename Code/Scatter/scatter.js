// Scatterplot for thesis project. Looks at county and state max and median AQI values from 1980-2019 at 10 year increments.
// Data Source: https://aqs.epa.gov/aqsweb/airdata/download_files.html#Annual
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

var aqiData


function preload() {
    aqiData = loadTable('/Data/EPA/scatter/AQI_2019_min.csv', 'csv', 'header');
    myFont = loadFont('/Assets/Barlow/Barlow-Light.ttf');
    myFontTitle = loadFont('/Assets/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf');
}


function setup() {
    let c = createCanvas(1500, 1310)
    background('#DBD3D1');
    noLoop();
    ellipseMode();

    var table = aqiData
    var regDia = 7;
    var featureDia = 13;
    y = 1300


    //bottom x axis line
    line(10, 1300, 1300, 1300);
    // y axis line
    line(10, 10, 10, 1300);
    // tick marks, every 20 AQI points by moving 60px (data multiplied by 3)
    line(5, 1230, 10, 1230);
    line(5, 1170, 10, 1170);
    line(5, 1110, 10, 1110);
    line(5, 1170, 10, 1170);
    line(5, 1050, 10, 1050);
    line(5, 990, 10, 990);
    line(5, 930, 10, 930);
    line(5, 870, 10, 870);
    line(5, 810, 10, 810);
    line(5, 750, 10, 750);
    line(5, 690, 10, 690);
    line(5, 630, 10, 630);
    line(5, 570, 10, 570);
    line(5, 510, 10, 510);
    line(5, 450, 10, 450);
    line(5, 390, 10, 390);
    line(5, 330, 10, 330);
    line(5, 270, 10, 270);
    line(5, 210, 10, 210);
    line(5, 150, 10, 150);
    line(5, 90, 10, 90);
    line(5, 30, 10, 30);


    // markers between regions
    line(230, 1300, 230, 1310);
    line(310, 1300, 310, 1310);
    line(550, 1300, 550, 1310);

    // background tints to be done in Ai
    // 0-50 = good
    // 51-100 = moderate
    // 101-150 = unhealthy for sensitive groups
    // 151-200 = unhealthy
    // 201-300 = very unhealthy
    // 301-500 = hazardous



function plotData(state, colX, startR, endR) {
    strokeWeight(1);
    noFill();
    for (var r=startR; r<endR; r++){
        if (table.getString(r, 0) == state)
            var medianVal = (table.getNum(r, 4)*3);
            console.log(medianVal);
            stroke(127,184,177)
            ellipse(colX, y - medianVal, regDia, regDia);
    };
    // plot max value
    for (var r=startR; r<endR; r++){
        if (table.getString(r, 0) == state)
            var maxVal = (table.getNum(r, 3)*3);
            console.log(maxVal);
            stroke(227,84,43);
            ellipse(colX, y - maxVal, regDia, regDia);
    };
    // plot overall median
    // noStroke();
    for (var r=startR; r<startR+1; r++){
        stroke(75,139,167);
        strokeWeight(2);
        if (table.getString(r, 0) == state)
        var oaMed = (table.getNum(r, 6)*3);
        console.log(oaMed);
        fill(75,139,167,120);
        ellipse(colX, y - oaMed, featureDia, featureDia);
    };
}

/* parameters: state name, x placement on graph (increase by 20 each state),
from csv file: start row value is actual row -2, end row value is one less than last state shown */

// West Region 1
plotData("Alaska", 20, 0, 6);
plotData("California", 40, 6, 59);
plotData("Colorado", 60, 59, 84);
plotData("Hawaii", 80, 84, 88);
plotData("Idaho", 100, 88, 108);
plotData("Montana", 120, 108, 123);
plotData("Nevada", 140, 123, 131);
plotData("Oregon", 160, 132, 154);
plotData("Utah", 180, 154, 168);
plotData("Washington", 200, 168, 199);
plotData("Wyoming", 220, 199, 217);

// Southwest Region 2
plotData("Arizona", 240, 217, 230);
plotData("New Mexico", 260, 230, 241);
plotData("Oklahoma", 280, 241, 263);
plotData("Texas", 300, 263, 309);

// Midwest Region 3
plotData("Illinois", 320, 310, 337);
plotData("Indiana", 340, 337, 377);
plotData("Iowa", 360, 377, 393);
plotData("Kansas", 380, 393, 403);
plotData("Michigan", 400, 403, 430);
plotData("Minnesota", 420, 430, 450);
plotData("Missouri", 440, 450, 472);
plotData("Nebraska", 460, 472, 480);
plotData("North Dakota", 480, 480, 490);
plotData("Ohio", 500, 490, 532);
plotData("South Dakota", 520, 532, 542);
plotData("Wisconsin", 540, 542, 570);

// Southeast Region 4
plotData("Alabama", 560, 570, 586);

}

