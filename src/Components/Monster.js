import Entity from "./Entity";

class Monster extends Entity {
  action(verb, world) {
    if (verb === "bump") {
      // attack Monster
      world.addToHistory(`Player Attacks ${this.attr.name}!`);
      this.attr.health = this.attr.health - (this.attr.weapon|| 2);
      if (this.attr.health <= 0) {
        world.addToHistory(`${this.attr.name} has been Slain.`);
        world.remove(this);
      } else {
        world.addToHistory(`${this.attr.name} Took Damage!!! Health is now ${this.attr.health}`);
        world.player.attr.health = world.player.attr.health - 1;
        if (world.player.attr.health <= 0) {
          world.addToHistory("You Died!!!!")
        } else {
          world.addToHistory(`You have ${world.player.attr.health} life remaining.`);
        }
      }
    }
  }
}

export default Monster
