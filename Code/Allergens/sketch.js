// ragweed allergen increase
// Data source: https://www.epa.gov/climate-indicators/climate-change-indicators-ragweed-pollen-season
// By Amanda Anderson-You

// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

var ragweed

function preload() {
    ragweed = loadTable('/Data/EPA/CSV/ragweed.csv', 'csv', 'header');
}

function setup() {
    let c = createCanvas(1000, 1000);
    background('#e9e4e2');

    var table = ragweed;


    // stroke(255);
    // for (i = 0; i < 37; i++) {
    //     line(50, i*lineSpacing, lineWidth, i*lineSpacing);
    //     text("test");
    // }    


    function plotData(state, startR, endR) {
        stroke(250,114,104);
        x=100;
        spacing = 10;
        for (var r=startR; r<endR; r++){
            if (table.getString(r, 1) == state)
                fill(250,114,104);
                var days = (table.getNum(r, 5));
                rect(x, row, days, days);
                x+=spacing;
        }
        row += 100;
    
    }


}