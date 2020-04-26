// Scatterplot for thesis project. Looks at county and state max and median AQI values from 1980-2019 at 10 year increments.
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

var aqiData


function preload() {
    aqiData = loadTable('/Data/EPA/scatter/AQI_2019_min.csv', 'csv', 'header');
    myFont = loadFont('/Assets/Barlow/Barlow-Light.ttf');
    myFontTitle = loadFont('/Assets/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf');
}


function setup() {
    let c = createCanvas(800, 800)
    // background('#DBD3D1');
    noStroke();
    noLoop();
    ellipseMode();


    var medianHue = (127,184,177); // seafoam green
    var oaMedianHue = (75,139,167); // medium green blue
    var maxHue = (227,84,43) // red-orange
    var columnWidth = 15;
    var table = aqiData
    var regDia = 6;
    var featureDia = 10;

    // fill(0);
    // stroke(0);
    // strokeWeight(3);
    // line(50, 1000, 1000, 1000);
    // noStroke();

    // draw medians for just Alaska
    x = 50
    y = 800
    fill(127,184,177)
    for (var r=0; r<table.getRowCount(); r++){
        if (table.getString(r, 0) == "Alaska")
            var medianVal = (table.getNum(r, 4)*10);
            fill(127,184,177)
            ellipse(x, 1000 - medianVal, regDia, regDia);
            // plot max value
        if (table.getString(r, 0) == "Alaska")
            var maxVal = (table.getNum(r, 3)*10);
            fill(227,84,43);
            ellipse(x, 1000 - maxVal, regDia, regDia);
            

    }

    // plot overall median
    for (var r=1; r<2; r++){
        if (table.getString(r, 0) == "Alaska")
        var oaMed = (table.getNum(r, 6)*10);
        fill(75,139,167);
        ellipse(x, 1000 - oaMed, featureDia, featureDia);
    }




}