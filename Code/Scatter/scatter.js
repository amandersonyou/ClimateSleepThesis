// 2019 Scatterplot for thesis project. Looks at county and state max and median AQI values from 1980-2019 at 10 year increments.
// Data Source: https://aqs.epa.gov/aqsweb/airdata/download_files.html#Annual
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js


var aqiData

function preload() {
    aqiData = loadTable('/Data/EPA/scatter/AQI_2010_min.csv', 'csv', 'header');
    
}

function setup() {
    let c = createCanvas(1100, 1360) // original
    // let c = createCanvas(1100, 10060) // for full data set
    background('#e9e4e2');
    ellipseMode();
    stroke('#222323');
    strokeWeight(.75);

    var table = aqiData
    var regDia = 10;
    var featureDia = 15;
    y = 1250 // for majority data
    // y = 13000 // for full data

// Draw plot lines
    //x axis
    line(10, y, 1070, y);
    // y axis
    line(10, 10, 10, y);
    // markers between regions (changes based on year and states recorded in csv)
    line(230, y, 230, y+5);
    line(310, y, 310, y+5);
    line(550, y, 550, y+5);
    line(890, y, 890, y+5);
    // line(1030, y, 1030, y+5);
    
    // tick mark lines on y-axis:
    for (i = 1; i < 200; i++) {
        line(5, (y-(60*i)), 10, (y-(60*i)));
    }

    // vertical lines behind the data
    stroke(255);
    for (i = 0; i < 54; i++) {
        line(i*20, y, i*20, 10);
    }

    // background lines for sectioning AQI
    line(10, (y-150), 1070, (y-150));// 0-50 = good
    line(10, (y-300), 1070, (y-300)); // 51-100 = moderate
    line(10, (y-450), 1070, (y-450)); // 101-150 = unhealthy for sensitive groups
    line(10, (y-600), 1070, (y-600)); // 151-200 = unhealthy
    line(10, (y-900), 1070, (y-900)); // 201-300 = very unhealthy
    // beyond: 301 = hazardous


/* Function to read csv data and plot data points for all median and max AQI values for a specific 
state per column. Also plot the overall median per state as larger point.*/

function plotData(state, colX, startR, endR) {
    strokeWeight(1.5);
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
            stroke(41,86,101); // #295665 dark teal
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
plotData("Alaska", 20, 0, 8);
plotData("California", 40, 8, 61);
plotData("Colorado", 60, 61, 93);
plotData("Hawaii", 80, 93, 96);
plotData("Idaho", 100, 96, 114);
plotData("Montana", 120, 114, 133);
plotData("Nevada", 140, 133, 143);
plotData("Oregon", 160, 143, 167);
plotData("Utah", 180, 167, 180);
plotData("Washington", 200, 180, 210);
plotData("Wyoming", 220, 210, 229);


//////////// ************************ 2019 Data ************************ ////////////
// // West Region 1
// plotData("Alaska", 20, 0, 6);
// plotData("California", 40, 6, 59);
// plotData("Colorado", 60, 59, 84);
// plotData("Hawaii", 80, 84, 88);
// plotData("Idaho", 100, 88, 108);
// plotData("Montana", 120, 108, 123);
// plotData("Nevada", 140, 123, 131);
// plotData("Oregon", 160, 132, 154);
// plotData("Utah", 180, 154, 168);
// plotData("Washington", 200, 168, 199);
// plotData("Wyoming", 220, 199, 217);

// // Southwest Region 2
// plotData("Arizona", 240, 217, 230);
// plotData("New Mexico", 260, 230, 241);
// plotData("Oklahoma", 280, 241, 263);
// plotData("Texas", 300, 263, 309);

// // Midwest Region 3
// plotData("Illinois", 320, 310, 337);
// plotData("Indiana", 340, 337, 377);
// plotData("Iowa", 360, 377, 393);
// plotData("Kansas", 380, 393, 403);
// plotData("Michigan", 400, 403, 430);
// plotData("Minnesota", 420, 430, 450);
// plotData("Missouri", 440, 450, 472);
// plotData("Nebraska", 460, 472, 480);
// plotData("North Dakota", 480, 480, 490);
// plotData("Ohio", 500, 490, 532);
// plotData("South Dakota", 520, 532, 542);
// plotData("Wisconsin", 540, 542, 570);

// // Southeast Region 4
// plotData("Alabama", 560, 570, 586);
// plotData("Arkansas", 580, 586, 599);
// plotData("Delaware", 600, 599, 602);
// plotData("District Of Columbia", 620, 602, 603);
// plotData("Florida", 640, 603, 642);
// plotData("Georgia", 660, 642, 670);
// plotData("Kentucky", 680, 670, 697);
// plotData("Louisiana", 700, 697, 720);
// plotData("Maryland", 720, 720, 737);
// plotData("Mississippi", 740, 737, 747);
// plotData("North Carolina", 760, 747, 784);
// plotData("South Carolina", 780, 784, 802);
// plotData("Tennessee", 800, 802, 825);
// plotData("Virginia", 820, 825, 859);
// plotData("West Virginia", 840, 859, 875);
// plotData("Puerto Rico", 860, 1006, 1016);
// plotData("Virgin Islands", 880, 1016, 1018);

// // Northeast Region 5
// plotData("Connecticut", 900, 875, 883);
// plotData("Maine", 920, 883, 893);
// plotData("Massachusetts", 940, 893, 906);
// plotData("New Hampshire", 960, 906, 913);
// plotData("New Jersey", 980, 913, 929);
// plotData("New York", 1000, 929, 960);
// plotData("Pennsylvania", 1020, 960, 1000);
// plotData("Rhode Island", 1040, 1000, 1003);
// plotData("Vermont", 1060, 1003, 1006);



//   saveCanvas(c, 'scatter2019_AQI', 'png');
}





/* Detailed to be done in Adobe Illustrator 

Transparent background tints for AQI levels

Outlier notes: 394 in Archuleta, Colorado due to prescribed forest burning: 
https://www.coloradoan.com/story/news/2019/10/17/air-quality-northern-colorado-compromised-due-elk-fire/4007261002/

3852 in Mono California,  886 in Pinal Arizona, 630 in Dona Ana, New Mexico, and 617 in Luna, New Mexico 
not plotted, add each with breaks in axis. Plot goes to 400 AQI. 

*/
