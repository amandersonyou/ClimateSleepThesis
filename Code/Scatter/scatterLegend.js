// Legend to go with AQI scatter plot
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js


function setup() {
    let c = createCanvas(300, 300)
    // background('#e9e4e2');
    ellipseMode();

    // median 
    strokeWeight(2);
    noFill();
    stroke(127,184,177) // robin egg blue, #7FB8B1
    ellipse(50, 125, 10, 10);

    // maximum
    stroke(41,86,101); // #295665 dark teal
    ellipse(50, 100, 10, 10);
    
    //  overall averaged median per state
    stroke(75,139,167);
    strokeWeight(2);
    fill(75,139,167,120); // medium blue #4B8BA7
    ellipse(50, 150, 15, 15);
    // saveCanvas(c, 'scatterLegend', 'png');
    
}
