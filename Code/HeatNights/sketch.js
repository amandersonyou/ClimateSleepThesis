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
    let c = createCanvas(2700, 3700) // original
    // let c = createCanvas(700, 600) // legend
    // background('#e9e4e2');
    ellipseMode();

    var tableNow = heatNow;
    var tableFuture = heatFuture;
    var tablePov = poverty;
    var tableEld = elderly;
    x = 100;
    lineSpacing = 100;
    lineWidth = 2650;
    row = 100


// Lines for each state
    stroke(255);
    for (i = 1; i < 37; i++) {
        line(50, i*lineSpacing, lineWidth, i*lineSpacing);
        text("test");
    }    


/////////////////////////// Plot 2020 data ///////////////////////////
function plotData(state, startR, endR) {
    stroke(250,114,104);
    x=150;
    spacing = 10;
    for (var r=startR; r<endR; r++){
        if (tableNow.getString(r, 1) == state)
            fill(250,114,104,100);
            var heatNVal = (tableNow.getNum(r, 5));
            ellipse(x, row, heatNVal, heatNVal);
            x+=spacing;
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



// /////////////////////////// Plot 2050 data //////////////////////////
row = 100
function plotFuture(state, startR, endR) {
    stroke(230,30,80);
    // noStroke();
    x=150;
    spacing = 10;
    for (var r=startR; r<endR; r++){
        if (tableFuture.getString(r, 1) == state)
            var heatFVal = (tableFuture.getNum(r, 5));
            fill(230,30,80, 100);
            arc(x, row, heatFVal, heatFVal, 0, PI + QUARTER_PI-.79, CHORD);
            x+=spacing;
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



x= 20
y = 100
// bars for percent of population in poverty
for (i = 0; i < tablePov.getRowCount(); i++) {
    noStroke();
    // fill(84,141,219, 230);
    fill(72,186,145);
    var povVal = (tablePov.getNum(i, 4)*2);
    rect(x-10, (i*y), 10, -povVal)
    console.log(povVal);
}

// bars for percent of population 65+ years old
for (i = 0; i < tableEld.getRowCount(); i++) {
    noStroke();
    // fill(60,64,143,230); 
    fill(28,74,58);
    var eldVal = (tableEld.getNum(i, 7)*2);
    rect(x, (i*y), 10, -eldVal)
}





//////////////// Legend Details ////////////////

// values x2 
//    noStroke();
// //    fill("#222323");
// fill(72,186,145);
//    // for 5
//    rect(145, 100, 10, -10);
//    // for 10
//    fill(60,64,143,230); 
//    rect(130, 100, 10, -20);
//    // for 20
//    fill(72,186,145);
//    rect(115, 100, 10, -40);




   // 65 & older: max is 20.5, min ~11

// fill(230,30,80, 100);
// stroke(230,30,80)
// arc(100, 100, 10, 10, 0, PI + QUARTER_PI-.79, CHORD);
// arc(100, 100, 30, 30, 0, PI + QUARTER_PI-.79, CHORD);
// arc(100, 100, 50, 50, 0, PI + QUARTER_PI-.79, CHORD);
// arc(100, 100, 70, 70, 0, PI + QUARTER_PI-.79, CHORD);
// arc(100, 100, 90, 90, 0, PI + QUARTER_PI-.79, CHORD);
// arc(100, 100, 110, 110, 0, PI + QUARTER_PI-.79, CHORD);
// arc(100, 100, 130, 130, 0, PI + QUARTER_PI-.79, CHORD);
// arc(100, 100, 150, 150, 0, PI + QUARTER_PI-.79, CHORD);


// fill(230,30,80, 100);
// stroke(230,30,80);
// arc(10, 300, 10, 10, 0, PI + QUARTER_PI-.79, CHORD);
// arc(30, 300, 30, 30, 0, PI + QUARTER_PI-.79, CHORD);
// arc(70, 300, 50, 50, 0, PI + QUARTER_PI-.79, CHORD);
// arc(130, 300, 70, 70, 0, PI + QUARTER_PI-.79, CHORD);
// arc(210, 300, 90, 90, 0, PI + QUARTER_PI-.79, CHORD);
// arc(310, 300, 110, 110, 0, PI + QUARTER_PI-.79, CHORD);
// arc(430, 300, 130, 130, 0, PI + QUARTER_PI-.79, CHORD);
// arc(570, 300, 150, 150, 0, PI + QUARTER_PI-.79, CHORD);

// fill(250,114,104,100);
// stroke(250,114,104);
// ellipse(10, 500, 10, 10)
// ellipse(30, 500, 30, 30);
// ellipse(70, 500, 50, 50);
// ellipse(130, 500, 70, 70);
// ellipse(210, 500, 90, 90);
// ellipse(310, 500, 110, 110);
// ellipse(430, 500, 130, 130);
// ellipse(570, 500, 150, 150);


// ellipse(300, 100, 10, 10)
// ellipse(300, 100, 30, 30);
// ellipse(300, 100, 50, 50);
// ellipse(300, 100, 70, 70);
// ellipse(300, 100, 90, 90);
// ellipse(300, 100, 110, 110);
// ellipse(300, 100, 130, 130);
// ellipse(300, 100, 150, 150);


    // saveCanvas(c, 'HeatNights', 'png');

}