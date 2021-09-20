function distanceFromHqInBlocks(block) {
    if (block >= 42) {
        return block - 42;
    } else if (block < 42) {
        return 42 - block;
    }
}
function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}
function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        return (start - destination) * 264;
    } else if (start < destination) {
        return (destination - start) * 264;
    }
}
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far';
    } else if (distanceTravelledInFeet(start, destination) > 2000) {
        return 25;
    } else if (distanceTravelledInFeet(start, destination) > 400) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
    } else{
        return 0
    }
}