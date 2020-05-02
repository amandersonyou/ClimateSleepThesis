/* Visualization looking at heat night projections for 2020 and 2050, including state percentages of 
vulnerable peoples including those under poverty line and those 65+ age and poverty */
// By Amanda Anderson-You
/* Data Citation: Centers for Disease Control and Prevention. National Environmental Public Health Tracking Network. 
Web. Accessed: 05/01/2020. www.cdc.gov/ephtracking */
// Edits to data: removed all 0 values, assigned region values to group by

// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js


var heatNow
var heatFuture
var poverty
var elderly


function preload() {
    heatNow = loadTable('/Data/CDC/HeatNights2020.csv', 'csv', 'header');
    heatFuture = loadTable('/Data/CDC/HeatNights2050.csv', 'csv', 'header');
    poverty = loadTable('/Data/CDC/StatesPovertyPercent.csv', 'csv', 'header');
    elderly = loadTable('/Data/CDC/State65older.csv', 'csv', 'header');
    myFont = loadFont('/Assets/Barlow/Barlow-Light.ttf');
    
}

function setup() {
    let c = createCanvas(2500, 5000) // original
    // let c = createCanvas(1100, 15500) // for large data set
    background('#e9e4e2');
    ellipseMode();
    stroke('#222323');
    // stroke(131, 131, 169);
    // strokeWeight(.75);

    var tableNow = heatNow;
    var tableFuture = heatFuture;
    x = 100;
    lineSpacing = 80;
    lineWidth = 1200;


// lines for each state
    stroke(255);
    for (i = 2; i < 54; i++) {
        // line(i*20, y, i*20, 10);
        line(x, i*lineSpacing, lineWidth, i*lineSpacing);
    }


// x=100;

row = 80

function plotData(state, startR, endR) {
    stroke(50);
    x=100;
    spacing = 10;
    for (var r=startR; r<endR; r++){
        if (tableNow.getString(r, 1) == state)
            fill(131, 131, 169, 100);
            var heatNVal = (tableNow.getNum(r, 5));
            ellipse(x, row, heatNVal, heatNVal);
            x+=spacing;
            // console.log(heatNVal);
    }
    row += 80;
}


// West
plotData("California", 0, 20);
// plotData("Montana", 20, 21);
plotData("Nevada", 21, 23);
plotData("Utah", 23, 26);
// Southwest
plotData("Arizona", 26, 36);
plotData("New Mexico", 36, 41);
plotData("Oklahoma", 41, 117);
plotData("Texas", 117, 347);
// Midwest
plotData("Illinois", 347, 448);
plotData("Indiana", 448, 523);
plotData("Iowa", 523, 616);
plotData("Kansas", 616, 710);
plotData("Michigan", 710, 734);
plotData("Minnesota", 734, 779);
plotData("Missouri", 779, 885);
plotData("Nebraska", 885, 941);
plotData("North Dakota", 941, 945);
plotData("Ohio", 945, 969);
plotData("South Dakota", 969, 1008);
plotData("Wisconsin", 1008, 1039);
// Southeast
plotData("Alabama", 1039, 1097);
plotData("Arkansas", 1097, 1171);
plotData("Delaware", 1171, 1174);
// plotData("District of Columbia", 1174, 1175);
plotData("Florida", 1175, 1242);
plotData("Georgia", 1242, 1382);
plotData("Kentucky", 1382, 1440);
plotData("Louisiana", 1440, 1504);
plotData("Maryland", 1504, 1525);
plotData("Mississippi", 1525, 1607);
plotData("North Carolina", 1607, 1677);
plotData("South Carolina", 1677, 1720);
plotData("Tennessee", 1720, 1761);
plotData("Virginia", 1761, 1834);
// plotData("West Virginia", 1834, 1835);
// Northeast
plotData("Connecticut", 1835, 1838);
// plotData("Massachusetts", 1838, 1839);
plotData("New Jersey", 1839, 1855);
plotData("New York", 1855, 1865);
plotData("Pennsylvania", 1865, 1870);

}