// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
// ================== uncomment this to active the objects below==========================
// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }
//console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"));
//  console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"))
// The solution
function declareWinner(fighter1, fighter2, firstAttacker) {
    var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
    var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
    if(fac1 < fac2) {
      return fighter2.name;
    } else if(fac2 < fac1) {
      return fighter1.name;
    } else {
      return firstAttacker;
    }
  }

// The solution 2
function declareWinner(fighter1, fighter2, firstAttacker) {
    // return "Write your code here";
    if(firstAttacker == fighter1.name){
      let count1 = 0
      while(fighter1.health>0){
        fighter1.health -= fighter2.damagePerAttack
        count1++
      }
      let count2 = 0
      while(fighter2.health>0){
        fighter2.health -= fighter1.damagePerAttack
        count2++
      }
      if(count1>=count2){
        return fighter1.name
      }else{
        return fighter2.name
      }
    }else if(firstAttacker == fighter2.name){
      let count2 = 0
      while(fighter2.health>0){
        fighter2.health -= fighter1.damagePerAttack
        count2++
      }
      let count1 = 0
      while(fighter1.health>0){
        fighter1.health -= fighter2.damagePerAttack
        count1++
      }
      if(count2>=count1){
        return fighter2.name
      }else{
        return fighter1.name
      }
    }
  }
