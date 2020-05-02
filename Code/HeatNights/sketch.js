/* Visualization looking at heat night projections for 2020 and 2050, including state percentages of 
vulnerable peoples including those under poverty line and those 65+ age and poverty */
// By Amanda Anderson-You
/* Data Citation: Centers for Disease Control and Prevention. National Environmental Public Health Tracking Network. 
Web. Accessed: 05/01/2020. www.cdc.gov/ephtracking */
// Edits to data: removed all 0 values and any states with only 1 county, assigned region values to group by

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
    let c = createCanvas(2900, 4000) // original
    // let c = createCanvas(1100, 15500) // for large data set
    background('#e9e4e2');
    ellipseMode();
    
    // stroke('#222323');
    // stroke(131, 131, 169);
    // strokeWeight(.75);

    var tableNow = heatNow;
    var tableFuture = heatFuture;
    var tablePov = poverty;
    var tableEld = elderly;
    x = 100;
    lineSpacing = 100;
    lineWidth = 2650;
    row = 100


// lines for each state
    stroke(255);
    for (i = 1; i < 37; i++) {
        // line(i*20, y, i*20, 10);
        line(x, i*lineSpacing, lineWidth, i*lineSpacing);
    }

    



// Plot 2020 data
function plotData(state, startR, endR) {
    stroke(255,99,47);
    // noStroke();
    x=150;
    spacing = 10;
    for (var r=startR; r<endR; r++){
        if (tableNow.getString(r, 1) == state)
            fill(255, 99, 47, 100);
            var heatNVal = (tableNow.getNum(r, 5));
            ellipse(x, row, heatNVal, heatNVal);
            // fill(131, 131, 169, 10);
            // arc(x, row, heatNVal, heatNVal, 0, PI + QUARTER_PI-.79, CHORD);
            x+=spacing;
            // console.log(heatNVal);
    }
    row += 100;

}


// West
plotData("California", 0, 20);
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


// Northeast
plotData("Connecticut", 1835, 1838);
plotData("New Jersey", 1839, 1855);
plotData("New York", 1855, 1865);
plotData("Pennsylvania", 1865, 1870);



/////////////////////////// function to plot 2050 //////////////////////////
row = 100
function plotFuture(state, startR, endR) {
    stroke(191, 13, 169);
    // noStroke();
    x=150;
    spacing = 10;
    for (var r=startR; r<endR; r++){
        if (tableFuture.getString(r, 1) == state)
            var heatFVal = (tableFuture.getNum(r, 5));
            // ellipse(x, row, heatNVal, heatNVal);
            fill(191, 13, 169, 100);
            arc(x, row, heatFVal, heatFVal, 0, PI + QUARTER_PI-.79, CHORD);
            x+=spacing;
            // console.log(heatNVal);
    }
    row += 100;
}

// West
plotFuture("California", 0, 29);
plotFuture("Nevada", 34, 38);
plotFuture("Utah", 38, 43);


// Southwest
plotFuture("Arizona", 45, 58);
plotFuture("New Mexico", 58, 69);
plotFuture("Oklahoma", 69, 146);
plotFuture("Texas", 146, 389);


// Midwest
plotFuture("Illinois", 389, 491);
plotFuture("Indiana", 491, 576);
plotFuture("Iowa", 576, 675);
plotFuture("Kansas", 675, 777);
plotFuture("Michigan", 777, 824);
plotFuture("Minnesota", 824, 880);
plotFuture("Missouri", 880, 992);
plotFuture("Nebraska", 992, 1059);
plotFuture("North Dakota", 1059, 1064);
plotFuture("Ohio", 1064, 1118);
plotFuture("South Dakota", 1118, 1170);
plotFuture("Wisconsin", 1170, 1216);


// Southeast
plotFuture("Alabama", 1216, 1281);
plotFuture("Arkansas", 1281, 1356);
plotFuture("Delaware", 1356, 1359);
plotFuture("Florida", 1359, 1426);
plotFuture("Georgia", 1426, 1571);
plotFuture("Kentucky", 1571, 1641);
plotFuture("Louisiana", 1641, 1705);
plotFuture("Maryland", 1705, 1727);
plotFuture("Mississippi", 1727, 1809);
plotFuture("North Carolina", 1809, 1881);
plotFuture("South Carolina", 1881, 1925);
plotFuture("Tennessee", 1925, 1971);
plotFuture("Virginia", 1971, 2062);


// Northeast
plotFuture("Connecticut", 2067, 2072);
plotFuture("New Jersey", 2080, 2100);
plotFuture("New York", 2100, 2126);
plotFuture("Pennsylvania", 2126, 2143);


x= 100
y = 100
// bars for poverty

for (i = 0; i < tablePov.getRowCount(); i++) {
    noStroke();
    fill(111,212,60);
    var povVal = (tablePov.getNum(i, 4));
    rect(x-10, i*y, 10, povVal)
    console.log(povVal);
}


// bars for 65+ age group

for (i = 0; i < tableEld.getRowCount(); i++) {
    noStroke();
    fill(19,94,8);
    var eldVal = (tableEld.getNum(i, 7));
    rect(x-20, (i*lineSpacing), 10, eldVal)
}



}