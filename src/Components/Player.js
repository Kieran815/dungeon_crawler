import Entity from "./Entity";

class Player extends Entity {

  attr = {
    name: "Player",
    ascii: "&",
    color: "White",
    health: 10,
    armor: 0,
    weapon: 0,
    gold: 0
  }

  // inventory = [];

  move(dx, dy) {
    // if player is dead, prevent move
    if(this.attr.health <= 0) return;
    this.x+= dx;
    this.y+= dy;
  }

  // world.player.attr.health = world.player.attr.health - 1;

  add(item) {
    // this.inventory.push(item);
    switch(item) {
      case "Health":
        this.player.attr.health += this.item.value;
        break;
      case "Armor":
        this.attr.armor += 2;
        break;
      case "Gold":
        this.attr.gold += 5;
        break;
      case "Long Sword":
        this.attr.weapon += 1;
        break;
      default:
        break;
    }
  }

  copyPlayer = () => {
    let newPlayer = new Player();
    Object.assign(newPlayer,this);
    return newPlayer;
  }
}

export default Player;
