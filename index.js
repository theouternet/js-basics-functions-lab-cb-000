function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - 42)
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(start, destination) {
 return Math.abs(destination - start) * 264
}

function calculatesFarePrice(start, destination) {
  
  let fare = 0
  
  if (distanceTravelledInFeet(start, destination) > 2500) {
    return 'cannot travel that far'
  }
  else if (distanceTravelledInFeet(start, destination) > 400) {
    return 
  }
}