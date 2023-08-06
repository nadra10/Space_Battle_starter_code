// game = document.querySelector('bodyContainer');
// ship = document.querySelector('mainCharacterView left');
// alien = document.querySelector('mainCharacterView right');




const ship = {
    name: "USS Schwarzenegger",
    Hull: 20,
    FirePower: 5,
    Accuracy: .7,
}
 
const alien = {
    name: "alienSpaceship1",
    Hull : 6,
    FirePower: 3,
    Accuracy: .6,
}
  
  attack(); {
    if (Math.random() < ship.Accuracy) {
        console.log("you have got it");
        alien.Hull -= ship.FirePower;
    } else {
        console.log("you have missed it")
    }
  }
Game(); {
    while(ship.Hull >0 && alien.Hull>0){
        attack();
    
     if(alien.Hull <= 0){
         console.log("you win");
         break;
        }
        attack();
        if(ship.Hull = 0){
            console.log("game over, you lose" );
            break;
        }
        }
        if (ship.Hull >0) {
            console.log("you won");
        }
    }
// start the game
game();

