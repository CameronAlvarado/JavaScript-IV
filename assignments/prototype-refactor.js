/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject{
    constructor (attr){
        this.createdAt = attr.createdAt;
        this.name = attr.name;
        this.dimensions = attr.dimensions;
  };
  
  destroy() {
    return `${this.name} was removed from the game.`;
  };
}
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
 class CharacterStats extends GameObject {
    constructor (attr){
        super(attr);
        this.healthPoints = attr.healthPoints;
  };
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
  takeDamage() {
    return `${this.name} took damage.`
    };
  };
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
class Humanoid extends CharacterStats {
   constructor (attr){
     super(attr);
     this.team = attr.team;
     this.weapons = attr.weapons;
     this.language = attr.language;
   };
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
  greet(){
    return `${this.name} offers a greeting in ${this.language}`
  };
  attack(){
    let dmg = (Math.floor((Math.random() * 10) + 1));
    return `${this.name} attacks ${villain.name} for ${dmg} points. ${villain.name} now has ${villain.healthPoints - dmg}hp.`;
    // if (dmg <= villain.healthPoints) {
    //     console.log();
    // };
  };
  attack2(){
    let dmg = (Math.floor((Math.random() * 10) + 1));
    return `${this.name} attacks ${hero.name} for 3 points. ${hero.name} now has ${hero.healthPoints - dmg}hp`
  };
};
   
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
class Hero extends Humanoid {
  constructor(attr){
      super(attr);
  };
  
//   Humanoid.prototype = Object.create(Humanoid.prototype);
  
//   attack(Villain){
//     return `${this.name} attacks ${villain.name} for 5 points. ${villain.name} now has ${villain.healthPoints - 5}hp.`
//   };
};
  // -------------------------------- Villian --------------------------------------
class Villain extends Humanoid {
  constructor(attr){
  }
  
//   Humanoid.prototype = Object.create(Humanoid.prototype);
  
//  attack2(Hero){
//     return `${this.name} attacks ${hero.name} for 3 points. ${hero.name} now has ${hero.healthPoints - 5}hp`
//   };
};
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
  // -------------------------------- New Objects ------------------------------------------
  
  const hero = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 3,
    },
    healthPoints: 7,
    name: 'Samus Aran',
    team: 'Earth',
    weapons: [
      'Power Beam',
      'Missiles',
      'Bombs',
    ],
    language: 'English',
  });
  
  const villain = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Metroid',
    team: 'Chozo',
    weapons: [
      'Energy Drain',
    ],
    language: 'Unknown',
  });

  // ----------------------------------------------------------------------------------
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.  
    
    console.log(hero.attack());
    console.log(villain.attack2());