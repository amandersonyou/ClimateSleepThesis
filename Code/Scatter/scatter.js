// Scatterplot for thesis project. Looks at county and state max and median AQI values from 1980-2019 at 10 year increments.
// Data Source: https://aqs.epa.gov/aqsweb/airdata/download_files.html#Annual
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js


var aqiData

function preload() {
    aqiData = loadTable('/Data/EPA/scatter/AQI_1990_min.csv', 'csv', 'header');
    
}

function setup() {
    let c = createCanvas(1100, 1460) // original
    // let c = createCanvas(1100, 15500) // for large data set
    background('#e9e4e2');
    ellipseMode();
    stroke('#222323');
    strokeWeight(.75);

    var table = aqiData
    var regDia = 10;
    var featureDia = 15;
    y = 1450 // for majority data
    // y = 15400 // for large dataset

// Draw plot lines
    //x axis
    line(10, y, 1070, y);
    // y axis
    line(10, 10, 10, y);

// markers between regions (changes based on year and states recorded in csv)
    line(230, y, 230, y+5); // for all other years
    // line(210, y, 210, y+5); // for 1980 only
    line(310, y, 310, y+5); // for all other years
    // line(290, y, 290, y+5); // for 1980 only
    line(550, y, 550, y+5); // for all other years
    // line(510, y, 510, y+5); // for 1980 only
    line(890, y, 890, y+5); // for all other years
    // line(830, y, 830, y+5);// for 1980 only
    
// tick mark lines on y-axis:
    for (i = 1; i < 200; i++) {
        line(5, (y-(60*i)), 10, (y-(60*i)));
    }

// vertical lines behind the data
// i < 54 for all years except 1980
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


//////////// ************************ 1980 Data ************************ ////////////

// // West Region 1
// plotData("Alaska", 20, 0, 4);
// plotData("California", 40, 4, 45);
// plotData("Colorado", 60, 45, 55);
// plotData("Hawaii", 80, 55, 56);
// plotData("Idaho", 100, 56, 60);
// plotData("Montana", 120, 60, 69);
// plotData("Nevada", 140, 69, 71);
// plotData("Oregon", 160, 71, 78);
// plotData("Utah", 180, 78, 87);
// plotData("Washington", 200, 87, 95);
// // plotData("Wyoming", 220, 95, 172);

// // // Southwest Region 2
// plotData("Arizona", 220, 95, 104);
// plotData("New Mexico", 240, 104, 110);
// plotData("Oklahoma", 260, 110, 115);
// plotData("Texas", 280, 115, 131);

// // Midwest Region 3
// plotData("Illinois", 300, 131, 154);
// plotData("Indiana", 320, 154, 182);
// plotData("Iowa", 340, 182, 192);
// plotData("Kansas", 360, 192, 195);
// plotData("Michigan", 380, 195, 220);
// plotData("Minnesota", 400, 220, 233);
// plotData("Missouri", 420, 233, 242);
// plotData("Nebraska", 440, 242, 246);
// plotData("North Dakota", 460, 246, 251);
// plotData("Ohio", 480, 251, 282);
// // plotData("South Dakota", 500, 442, 446);
// plotData("Wisconsin", 500, 282, 312);

// // Southeast Region 4
// plotData("Alabama", 520, 312, 322);
// plotData("Arkansas", 540, 322, 324);
// plotData("Delaware", 560, 324, 327);
// plotData("District Of Columbia", 580, 327, 328);
// plotData("Florida", 600, 328, 349);
// plotData("Georgia", 620, 349, 364);
// plotData("Kentucky", 640, 364, 387);
// plotData("Louisiana", 660, 387, 395);
// plotData("Maryland", 680, 395, 406);
// plotData("Mississippi", 700, 406, 412);
// plotData("North Carolina", 720, 412, 424);
// plotData("South Carolina", 740, 424, 439);
// plotData("Tennessee", 760, 439, 463);
// plotData("Virginia", 780, 463, 483);
// plotData("West Virginia", 800, 483, 489);
// plotData("Puerto Rico", 820, 592, 597);
// // plotData("Virgin Islands", 880, 888, 890);

// // Northeast Region 5
// plotData("Connecticut", 840, 489, 495);
// plotData("Maine", 860, 495, 504);
// plotData("Massachusetts", 880, 504, 513);
// plotData("New Hampshire", 900, 513, 517);
// plotData("New Jersey", 920, 517, 537);
// plotData("New York", 940, 537, 561);
// plotData("Pennsylvania", 960, 561, 584);
// plotData("Rhode Island", 980, 584, 586);
// plotData("Vermont", 1000, 586, 592);

//   saveCanvas(c, 'scatter1980_AQI', 'png');


//////////// ************************ 1990 Data ************************ ////////////

// West Region 1
// plotData("Alaska", 20, 0, 7);
// plotData("California", 40, 7, 58);
// plotData("Colorado", 60, 58, 86);
// plotData("Hawaii", 80, 86, 90);
// plotData("Idaho", 100, 90, 102);
// plotData("Montana", 120, 102, 123);
// plotData("Nevada", 140, 123, 128);
// plotData("Oregon", 160, 128, 141);
// plotData("Utah", 180, 141, 149);
// plotData("Washington", 200, 149, 165);
// plotData("Wyoming", 220, 165, 172);

// // Southwest Region 2
// plotData("Arizona", 240, 172, 184);
// plotData("New Mexico", 260, 184, 199);
// plotData("Oklahoma", 280, 199, 210);
// plotData("Texas", 300, 210, 239);

// // Midwest Region 3
// plotData("Illinois", 320, 239, 267);
// plotData("Indiana", 340, 267, 304);
// plotData("Iowa", 360, 304, 316);
// plotData("Kansas", 380, 316, 325);
// plotData("Michigan", 400, 325, 352);
// plotData("Minnesota", 420, 352, 365);
// plotData("Missouri", 440, 365, 379);
// plotData("Nebraska", 460, 379, 386);
// plotData("North Dakota", 480, 386, 398);
// plotData("Ohio", 500, 389, 442);
// plotData("South Dakota", 520, 442, 446);
// plotData("Wisconsin", 540, 446, 475);

// // Southeast Region 4
// plotData("Alabama", 560, 475, 498);
// plotData("Arkansas", 580, 498, 517);
// plotData("Delaware", 600, 517, 520);
// plotData("District Of Columbia", 620, 520, 521);
// plotData("Florida", 640, 521, 538);
// plotData("Georgia", 660, 538, 554);
// plotData("Kentucky", 680, 554, 577);
// plotData("Louisiana", 700, 577, 596);
// plotData("Maryland", 720, 596, 609);
// plotData("Mississippi", 740, 609, 621);
// plotData("North Carolina", 760, 621, 646);
// plotData("South Carolina", 780, 646, 665);
// plotData("Tennessee", 800, 665, 697);
// plotData("Virginia", 820, 697, 739);
// plotData("West Virginia", 840, 739, 751);
// plotData("Puerto Rico", 860, 877, 888);
// plotData("Virgin Islands", 880, 888, 890);

// // Northeast Region 5
// plotData("Connecticut", 900, 751, 759);
// plotData("Maine", 920, 759, 772);
// plotData("Massachusetts", 940, 772, 783);
// plotData("New Hampshire", 960, 783, 791);
// plotData("New Jersey", 980, 791, 807);
// plotData("New York", 1000, 807, 840);
// plotData("Pennsylvania", 1020, 840, 870);
// plotData("Rhode Island", 1040, 870, 872);
// plotData("Vermont", 1060, 872, 877);

//   saveCanvas(c, 'scatter1990_AQI', 'png');


//////////// ************************ 2000 Data ************************ ////////////

// // West Region 1
// plotData("Alaska", 20, 0, 6);
// plotData("California", 40, 6, 62);
// plotData("Colorado", 60, 62, 92);
// plotData("Hawaii", 80, 92, 96);
// plotData("Idaho", 100, 96, 115);
// plotData("Montana", 120, 115, 133);
// plotData("Nevada", 140, 133, 140);
// plotData("Oregon", 160, 140, 158);
// plotData("Utah", 180, 158, 171);
// plotData("Washington", 200, 171, 194);
// plotData("Wyoming", 220, 194, 208);

// // Southwest Region 2
// plotData("Arizona", 240, 194, 221);
// plotData("New Mexico", 260, 221, 239);
// plotData("Oklahoma", 280, 239, 265);
// plotData("Texas", 300, 265, 300);

// // Midwest Region 3
// plotData("Illinois", 320, 300, 326);
// plotData("Indiana", 340, 326, 371);
// plotData("Iowa", 360, 371, 390);
// plotData("Kansas", 380, 390, 401);
// plotData("Michigan", 400, 401, 433);
// plotData("Minnesota", 420, 433, 456);
// plotData("Missouri", 440, 456, 475);
// plotData("Nebraska", 460, 475, 487);
// plotData("North Dakota", 480, 487, 501);
// plotData("Ohio", 500, 501, 551);
// plotData("South Dakota", 520, 551, 557);
// plotData("Wisconsin", 540, 557, 589);

// // Southeast Region 4
// plotData("Alabama", 560, 589, 612);
// plotData("Arkansas", 580, 612, 633);
// plotData("Delaware", 600, 633, 636);
// plotData("District Of Columbia", 620, 636, 637);
// plotData("Florida", 640, 637, 672);
// plotData("Georgia", 660, 672, 708);
// plotData("Kentucky", 680, 708, 744);
// plotData("Louisiana", 700, 744, 770);
// plotData("Maryland", 720, 770, 785);
// plotData("Mississippi", 740, 785, 803);
// plotData("North Carolina", 760, 803, 855);
// plotData("South Carolina", 780, 855, 882);
// plotData("Tennessee", 800, 882, 915);
// plotData("Virginia", 820, 915, 955);
// plotData("West Virginia", 840, 955, 973);
// plotData("Puerto Rico", 860, 1111, 1127);
// plotData("Virgin Islands", 880, 1127, 1130);

// // // Northeast Region 5
// plotData("Connecticut", 900, 973, 981);
// plotData("Maine", 920, 981, 995);
// plotData("Massachusetts", 940, 995, 1006);
// plotData("New Hampshire", 960, 1006, 1016);
// plotData("New Jersey", 980, 1016, 1033);
// plotData("New York", 1000, 1033, 1068);
// plotData("Pennsylvania", 1020, 1068, 1104);
// plotData("Rhode Island", 1040, 1104, 1107);
// plotData("Vermont", 1060, 1107, 1111);

//   saveCanvas(c, 'scatter2000_AQI', 'png');


//////////// ************************ 2010 Data ************************ ////////////
// // West Region 1
// plotData("Alaska", 20, 0, 8);
// plotData("California", 40, 8, 61);
// plotData("Colorado", 60, 61, 93);
// plotData("Hawaii", 80, 93, 96);
// plotData("Idaho", 100, 96, 114);
// plotData("Montana", 120, 114, 133);
// plotData("Nevada", 140, 133, 143);
// plotData("Oregon", 160, 143, 167);
// plotData("Utah", 180, 167, 180);
// plotData("Washington", 200, 180, 210);
// plotData("Wyoming", 220, 210, 229);

// // Southwest Region 2
// plotData("Arizona", 240, 229, 242);
// plotData("New Mexico", 260, 242, 260);
// plotData("Oklahoma", 280, 260, 284);
// plotData("Texas", 300, 284, 329);

// // Midwest Region 3
// plotData("Illinois", 320, 329, 356);
// plotData("Indiana", 340, 356, 399);
// plotData("Iowa", 360, 399, 419);
// plotData("Kansas", 380, 419, 434);
// plotData("Michigan", 400, 434, 462);
// plotData("Minnesota", 420, 462, 483);
// plotData("Missouri", 440, 483, 504);
// plotData("Nebraska", 460, 504, 515);
// plotData("North Dakota", 480, 515, 525);
// plotData("Ohio", 500, 525, 569);
// plotData("South Dakota", 520, 569, 578);
// plotData("Wisconsin", 540, 578, 611);

// // Southeast Region 4
// plotData("Alabama", 560, 611, 630);
// plotData("Arkansas", 580, 630, 647);
// plotData("Delaware", 600, 647, 650);
// plotData("District Of Columbia", 620, 650, 651);
// plotData("Florida", 640, 651, 689);
// plotData("Georgia", 660, 689, 721);
// plotData("Kentucky", 680, 721, 753);
// plotData("Louisiana", 700, 753, 776);
// plotData("Maryland", 720, 776, 792);
// plotData("Mississippi", 740, 792, 805);
// plotData("North Carolina", 760, 805, 851);
// plotData("South Carolina", 780, 851, 871);
// plotData("Tennessee", 800, 871, 896);
// plotData("Virginia", 820, 896, 935);
// plotData("West Virginia", 840, 935, 951);
// plotData("Puerto Rico", 860, 1083, 1093);
// plotData("Virgin Islands", 880, 1093, 1095);

// // Northeast Region 5
// plotData("Connecticut", 900, 951, 959);
// plotData("Maine", 920, 959, 971);
// plotData("Massachusetts", 940, 971, 983);
// plotData("New Hampshire", 960, 983, 990);
// plotData("New Jersey", 980, 990, 1006);
// plotData("New York", 1000, 1006, 1040);
// plotData("Pennsylvania", 1020, 1040, 1077);
// plotData("Rhode Island", 1040, 1077, 1080);
// plotData("Vermont", 1060, 1080, 1083);

//   saveCanvas(c, 'scatter2010_AQI', 'png');


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
