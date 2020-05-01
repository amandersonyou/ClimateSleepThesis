// p5 sketch showing increased health risks for insufficient sleep
// data source: https://www.cdc.gov/sleep/data_statistics.html
// of those with short sleep duration, these percentages were also these characteristics
var data

function preload() {
    data = loadTable('/Data/CDC/CDC_sleepCharacteristics.csv', 'csv', 'header'),
    myFont = loadFont('/Assets/Barlow/Barlow-Light.ttf');
}

function setup() {
    let c = createCanvas(400, 400);
    // background('#DBD3D1');
    // stroke(131, 131, 169);
    noStroke();
    ellipseMode();

    var table = data


    
    // Gender men vs. women ****************************************
    x = 100
    y = 200
    gap = 200

    for (var r=0; r<2; r++){
        fill(131, 131, 169);
        var gender = (table.getNum(r, 1)*4);
        ellipse(x, y, gender, gender);
        console.log(gender);
        x += gap;
    }
    // saveCanvas(c, 'SleepDemoGender', 'png');

    // Age Group ****************************************
//     x = 100
//     y = 120
//     gap = 100

// // age
//     for (var r=2; r<5; r++){
//         fill(131, 131, 169);
//         var age = (table.getNum(r, 1)*2);
//         ellipse(x, y, age, age);
//         console.log(age);
//         x += gap;
//     }

//     x = 100
//     y = 280

//     for (var r=5; r<8; r++){
//         fill(131, 131, 169);
//         var age = (table.getNum(r, 1)*2);
//         ellipse(x, y, age, age);
//         console.log(age);
//         x += gap;
//     }

    // saveCanvas(c, 'SleepDemoAge', 'png');

//     // Race ****************************************
//     x = 50
//     y = 120
//     gap = 100

// // race
//     for (var r=8; r<12; r++){
//         fill(131, 131, 169);
//         var race = (table.getNum(r, 1)*2);
//         ellipse(x, y, race, race);
//         console.log(race);
//         x += gap;
//     }

//     x = 80
//     y = 280
//     gap =110

//     for (var r=12; r<15; r++){
//         fill(131, 131, 169);
//         var race = (table.getNum(r, 1)*2);
//         ellipse(x, y, race, race);
//         console.log(race);
//         x += gap;
//     }

    // saveCanvas(c, 'SleepDemoRace', 'png');


    // HS Grade ****************************************
//     x = 100
//     y = 110
//     gap = 190

// // grade
//     for (var r=15; r<17; r++){
//         fill(131, 131, 169);
//         var grade = (table.getNum(r, 1)*2);
//         ellipse(x, y, grade, grade);
//         console.log(grade);
//         x += gap;
//     }

//     x = 100
//     y = 270
//     gap =190

//     for (var r=17; r<19; r++){
//         fill(131, 131, 169);
//         var grade = (table.getNum(r, 1)*2);
//         ellipse(x, y, grade, grade);
//         console.log(grade);
//         x += gap;
//     }
        // saveCanvas(c, 'SleepDemoGrade', 'png');



}

