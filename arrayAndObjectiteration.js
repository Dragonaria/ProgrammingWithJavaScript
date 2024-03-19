// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (item of dairy) {
        console.log(item);
    }
}
logDairy();

// Task 2
const animal = {
    canJump: true
};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (let att of Object.keys(bird)) {
        console.log(`${att}: ${bird[att]}`);
    }
}
birdCan()

// Task 3
function animalCan() {
    for (let att in bird) {
        console.log(`${att}: ${bird[att]}`);
    }
}
animalCan()