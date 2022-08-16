function distanceFromHqInBlocks(number){

    let hq = 42;
    if (number <= 42)

    return hq-number;

    else (number > 42)
        return number - hq
    
}
console.log(distanceFromHqInBlocks(50));

// const block = distanceFromHqInBlocks(50);

function distanceFromHqInFeet(dist){
    
    const block = distanceFromHqInBlocks(dist);
    const feet = block * 264;
  return feet ;

}


function distanceTravelledInFeet(start, stop){
return Math.abs((start -stop) *264)


}
function calculatesFarePrice(start,destination){
    const distance = distanceTravelledInFeet(start,destination)
    if (distance <=400) {
        return 0
    }else if(distance <= 2000){
        return 0.02 * (distance - 400)
    }else if(distance <= 2500){
        return 25
     }else if (distance > 2500){
        return "cannot travel that far"
     }
}