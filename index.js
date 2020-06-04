//Object.keys
let chance = require('chance').Chance();

const weights = {
   green: 1,
   yellow: 2,
   red: 3
};

const weightedLottery = (someObject) => {
    let arrayOne = Object.keys(someObject);
    let arrayTwo = Object.values(someObject);
    return chance.weighted(arrayOne, arrayTwo);
}

console.log(weightedLottery(weights));


