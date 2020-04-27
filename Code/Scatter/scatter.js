// 2019 Scatterplot for thesis project. Looks at county and state max and median AQI values from 1980-2019 at 10 year increments.
// Data Source: https://aqs.epa.gov/aqsweb/airdata/download_files.html#Annual
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js


var aqiData

function preload() {
    aqiData = loadTable('/Data/EPA/scatter/AQI_2019_min.csv', 'csv', 'header');
}

function setup() {
    let c = createCanvas(1100, 1360)
    background('#DBD3D1');
    noLoop();
    ellipseMode();
    stroke(75);
    strokeWeight(.75);

    var table = aqiData
    var regDia = 7;
    var featureDia = 13;
    y = 1250

// Draw plot lines
    //x axis
    line(10, y, 1070, y);
    // y axis
    line(10, 10, 10, y);
    // markers between regions (changes based on year and states recorded in csv)
    line(230, y, 230, y+20);
    line(310, y, 310, y+20);
    line(550, y, 550, y+20);
    line(850, y, 850, y+20);
    line(1030, y, 1030, y+20);
    
    // tick mark lines on y-axis:
    for (i = 1; i < 22; i++) {
        line(5, (y-(60*i)), 10, (y-(60*i)));
    }

    // vertical lines behind the data
    stroke(255);
    for (i = 0; i < 54; i++) {
        line(i*20, y, i*20, 10);
    }



/* Function to read csv data and plot data points for all median and max AQI values for a specific 
state per column. Also plot the overall median per state as larger point.*/

function plotData(state, colX, startR, endR) {
    strokeWeight(1);
    noFill();
    // plot median values
    for (var r=startR; r<endR; r++){
        if (table.getString(r, 0) == state)
            var medianVal = (table.getNum(r, 4)*3);
            // console.log(medianVal);
            stroke(127,184,177) // robin egg blue, #7FB8B1
            ellipse(colX, y - medianVal, regDia, regDia);
    };

    // plot max values
    for (var r=startR; r<endR; r++){
        if (table.getString(r, 0) == state)
            var maxVal = (table.getNum(r, 3)*3);
            // console.log(maxVal);
            stroke(6,42,120); // dark blue, #062A78
            ellipse(colX, y - maxVal, regDia, regDia);
    };

    // plot overall averaged median per state
    for (var r=startR; r<startR+1; r++){
        stroke(75,139,167);
        strokeWeight(2);
        if (table.getString(r, 0) == state)
        var oaMed = (table.getNum(r, 6)*3);
        // console.log(oaMed);
        fill(75,139,167,120); // medium blue #4B8BA7
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
plotData("Arkansas", 580, 586, 599);
plotData("Delaware", 600, 599, 602);
plotData("District Of Columbia", 620, 602, 603);
plotData("Florida", 640, 603, 642);
plotData("Georgia", 660, 642, 670);
plotData("Kentucky", 680, 670, 697);
plotData("Louisiana", 700, 697, 720);
plotData("Maryland", 720, 720, 737);
plotData("Mississippi", 740, 737, 747);
plotData("North Carolina", 760, 747, 784);
plotData("South Carolina", 780, 784, 802);
plotData("Tennessee", 800, 802, 825);
plotData("Virginia", 820, 825, 859);
plotData("West Virginia", 840, 859, 875);

// Northeast Region 5
plotData("Connecticut", 860, 875, 883);
plotData("Maine", 880, 883, 893);
plotData("Massachusetts", 900, 893, 906);
plotData("New Hampshire", 920, 906, 913);
plotData("New Jersey", 940, 913, 929);
plotData("New York", 960, 929, 960);
plotData("Pennsylvania", 980, 960, 1000);
plotData("Rhode Island", 1000, 1000, 1003);
plotData("Vermont", 1020, 1003, 1006);

// Islands Region 6
plotData("Puerto Rico", 1040, 1006, 1016);
plotData("Virgin Islands", 1060, 1016, 1018);


//   saveCanvas(c, 'scatter2019_AQI', 'png');
}





/* Detailed to be done in Adobe Illustrator 

Transparent background tints:
0-50 = good
51-100 = moderate
101-150 = unhealthy for sensitive groups
151-200 = unhealthy
201-300 = very unhealthy
301-500 = hazardous

Outlier notes: 394 in Archuleta, Colorado due to prescribed forest burning: 
https://www.coloradoan.com/story/news/2019/10/17/air-quality-northern-colorado-compromised-due-elk-fire/4007261002/

3852 in Mono California,  886 in Pinal Arizona, 630 in Dona Ana, New Mexico, and 617 in Luna, New Mexico 
not plotted, add each with breaks in axis. Plot goes to 400 AQI. 

*/
