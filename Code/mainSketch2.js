// WIP if design is altered to be full assortment

// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

// var sleepHigh
// var asthmaHigh
var totalData
var totalData2

function preload() {
    // sleepHigh = loadTable('/Data/500_Cities/SleepHigh.csv', 'csv', 'header')
    // asthmaHigh = loadTable('/Data/500_Cities/AsthmaHigh.csv', 'csv', 'header')
    totalData = loadTable('/Data/500_Cities/500_Cities__SleepAsthmaEPA.csv', 'csv', 'header')
    totalData2 = loadTable('/Data/500_Cities/500_Cities_AsthmaOrderedTotal.csv', 'csv', 'header')
    myFont = loadFont('/Assets/Barlow/Barlow-Light.ttf');
    myFontTitle = loadFont('/Assets/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf');
}

function setup() {
    
    let c = createCanvas(900, 7300)
    // background('#DBD3D1');
    noStroke();
    noLoop();

    var asthmaHue = "#e17e7b"
    var sleepHue = "#777a9e"
    var textColor = '#222323'
    var row_height = 14
    var table_total = totalData
    var table_total2 = totalData2


// title
    textFont(myFontTitle);
    textAlign(LEFT);
    textSize(22);
    text('Ordered by Sleep', 170, 120);
    text('Ordered by Asthma', 550, 120);
    // text('', 300, 90);


// labels 
x = 190
y = 160
    textFont(myFont);
    textSize(12);
    for (var r=0; r<table_total.getRowCount(); r++){
        fill(textColor);
        textAlign(RIGHT);
        text(table_total.getString(r, 2), x, y)
        y += row_height
    }

    // Total Data
    // Median AQI
    x = 205
    y = 160
    for (var r=0; r<table_total.getRowCount(); r++){
        var aqiVal = (table_total.getNum(r, 6));
        alphaCol = map(aqiVal, 0, 1, 0, 255);
        fill(36,102,129,(alphaCol))
        // rect(x, y, aqiVal, row_height-2)
        // fill(textColor)
        ellipse(x, y-5, 15, 12);
        y += row_height
    }
    
    // Sleep Values
    x = 220
    y = 150

    for (var r=0; r<table_total.getRowCount(); r++){
        var sleepVal = (table_total.getNum(r, 3)*4)
        fill(sleepHue)
        rect(x, y, sleepVal, row_height-2)
        textAlign(LEFT);
        fill(textColor)
        // text(table_total.getNum(r, 3),(x+sleepVal+5), y+10)
        y += row_height
    }
    
    // Asthma Values
    x = 220
    y = 150
    fill(asthmaHue)
    for (var r=0; r<table_total.getRowCount(); r++){
        var asthmaVal = (table_total.getNum(r, 4)*4)
        fill(asthmaHue)
        rect(x, y, asthmaVal, row_height-2)
        textAlign(RIGHT);
        fill(textColor)
        // text(table_total.getNum(r, 4),(x+asthmaVal-5), y+10)
        y += row_height
    }


//////////////////Second table ordered by Asthma prevelance////////////////

// labels 
x = 590
y = 160
    textFont(myFont);
    textSize(12);
    for (var r=0; r<table_total2.getRowCount(); r++){
        fill(textColor);
        textAlign(RIGHT);
        text(table_total2.getString(r, 2), x, y)
        // text(table_total.getNum(r, 5), x+30, y)
        y += row_height
    }

    // Total Data
    // Median AQI
    x = 605
    y = 160
    for (var r=0; r<table_total2.getRowCount(); r++){
        var aqiVal = (table_total2.getNum(r, 6));
        alphaCol = map(aqiVal, 0, 1, 0, 255);
        fill(36,102,129,(alphaCol))
        ellipse(x, y-5, 15, 12);
        y += row_height
    }
    
    // Sleep Values
    x = 620
    y = 150

    for (var r=0; r<table_total2.getRowCount(); r++){
        var sleepVal = (table_total2.getNum(r, 3)*4)
        fill(sleepHue)
        rect(x, y, sleepVal, row_height-2)
        textAlign(LEFT);
        fill(textColor)
        // text(table_total.getNum(r, 3),(x+sleepVal+5), y+10)
        y += row_height
    }
    
    // Asthma Values
    x = 620
    y = 150
    fill(asthmaHue)
    for (var r=0; r<table_total2.getRowCount(); r++){
        var asthmaVal = (table_total2.getNum(r, 4)*4)
        fill(asthmaHue)
        rect(x, y, asthmaVal, row_height-2)
        textAlign(RIGHT);
        fill(textColor)
        // text(table_total.getNum(r, 4),(x+asthmaVal-5), y+10)
        y += row_height
    }



//     // // Top 15 records with highest current adult asthma prevelance
//     // x = 170
//     // y = 650
//     // for (var r=0; r<table_asthma.getRowCount(); r++){
//     //     var aqiVal = (table_asthma.getNum(r, 4)*4)
//     //     fill(36,102,129, 140)
//     //     rect(x+bar_width, y, bar_width-15, -aqiVal)
//     //     x += bar_width
//     // }
    
//     // x = 200
//     // y = 650
//     // middle = 12
//     // fill(sleepHue)
//     // for (var r=0; r<table_asthma.getRowCount(); r++){
//     //     var sleepVal = (table_asthma.getNum(r, 2)*4)
//     //     rect(x, y, bar_width-25, -sleepVal)
//     //     x += bar_width
//     // }
    
//     // // draw asthma bars per city
//     // x = 180
//     // y = 650
//     // fill(asthmaHue)
//     // for (var r=0; r<table_sleep.getRowCount(); r++){
//     //     var asthmaVal = (table_asthma.getNum(r, 3)*4)
//     //     rect(x+bar_width, y, bar_width-25, -asthmaVal)
//     //     x += bar_width
//     // }
// saveCanvas(c, 'Final_SleepAsthmaVis', 'png');
}





///////////////////////// Code for Legend //////////////

// // labels 
// x = 90
// y = 160
//     textFont(myFont);
//     textSize(12);
//     for (var r=0; r<1; r++){
//         fill(textColor);
//         textAlign(RIGHT);
//         text('City, State', x, y)
//         text('Median AQI by State:', x+83, y+90)
//         text('% Prevelance of Sleep < 7 hours', x+260, y+30)
//         text('% Prevelance Asthma', x+210, y+60)
//         text('0%', x+45, y-25)
//         text('25%', x+145, y-25)
//         text('50%', x+245, y-25)
//         y += row_height
//     }



//         // Total Data
//     // Median AQI
//     x = 105
//     y = 160
//     for (var r=0; r<1; r++){
//         var aqiVal = (table_total.getNum(r, 6));
//         alphaCol = map(aqiVal, 0, 1, 0, 255);
//         fill(36,102,129,(alphaCol))
//         // rect(x, y, aqiVal, row_height-2)
//         // fill(textColor)
//         ellipse(x, y-5, 15, 12);
//         y += row_height
//     }
    
//     // Sleep Values
//     x = 120
//     y = 150

//     for (var r=0; r<1; r++){
//         var sleepVal = (table_total.getNum(r, 3)*4)
//         fill(sleepHue)
//         rect(x, y, sleepVal, row_height-2)
//         textAlign(LEFT);
//         fill(textColor)
//         // text(table_total.getNum(r, 3),(x+sleepVal+5), y+10)
//         y += row_height
//     }
    
//     // Asthma Values
//     x = 120
//     y = 150
//     fill(asthmaHue)
//     for (var r=0; r<1; r++){
//         var asthmaVal = (table_total.getNum(r, 4)*4)
//         fill(asthmaHue)
//         rect(x, y, asthmaVal, row_height-2)
//         textAlign(RIGHT);
//         fill(textColor)
//         // text(table_total.getNum(r, 4),(x+asthmaVal-5), y+10)
//         y += row_height
//     }

//     // labels for Median AQI Legend


//     x = 80
//     y = 270
//     for (var r=0; r<1; r++){
//         var aqiVal = (.2);
//         alphaCol = map(aqiVal, 0, 1, 0, 255);
//         fill(36,102,129,(alphaCol))
//         ellipse(x, y-5, 15, 12);
//         fill(textColor)
//         text('good',x+15,y+15)
//         x += row_height
//     } 
//     x = 110
//     y = 270
//     for (var r=0; r<1; r++){
//         var aqiVal = (.4);
//         alphaCol = map(aqiVal, 0, 1, 0, 255);
//         fill(36,102,129,(alphaCol))
//         ellipse(x, y-5, 15, 12);
//         x += row_height
//     } 
//     x = 140
//     y = 270
//     for (var r=0; r<1; r++){
//         var aqiVal = (.6);
//         alphaCol = map(aqiVal, 0, 1, 0, 255);
//         fill(36,102,129,(alphaCol))
//         ellipse(x, y-5, 15, 12);
//         x += row_height
//     } 
//     x = 170
//     y = 270
//     for (var r=0; r<1; r++){
//         var aqiVal = (.8);
//         alphaCol = map(aqiVal, 0, 1, 0, 255);
//         fill(36,102,129,(alphaCol))
//         ellipse(x, y-5, 15, 12);
//         x += row_height
//     } 
//     x = 200
//     y = 270
//     for (var r=0; r<1; r++){
//         var aqiVal = (1);
//         alphaCol = map(aqiVal, 0, 1, 0, 255);
//         fill(36,102,129,(alphaCol))
//         ellipse(x, y-5, 15, 12);
//         fill(textColor)
//         text('poor',x+12,y+15)
//         x += row_height
//     } 
//     // saveCanvas(c, 'legend', 'png');
// }
