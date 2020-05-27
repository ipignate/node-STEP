var STEP = require("./readStep");
var CartesianPointKeeper = require("./CartesianPointKeeper");
var reader = new STEP.StepReader();

var opitzCode = {
    firstDigit: '-1',
    secondDigit: '-1',
    thirdDigit: '-1',
    fourthDigit: '-1',
    fifthDigit: '-1',
    sixthDigit: '-1',
    seventhDigit:'-1',
    eighthDigit: '-1',
    ninethDigit: '-1'
}

let csLineId = [];
reader.read("parts/anchor.step",function(err) {
    if (err) {
        console.log("failure :" + err);
        return;
    }
    var product_definitions = reader.getObjects("PRODUCT_DEFINITION");

    let cs = reader.getObjects("CLOSED_SHELL");
    cs.forEach(element => {
        csLineId.push(element['_id']);
    });

    let maxMeasures = CartesianPointKeeper.getMaxShapeMeasures();
    //reader.dumpStatistics();
});




