import Entity from "./Entity";

class Loot extends Entity {

  action(verb, world) {
    if (verb === "bump") {
      console.log("Looted", this.attr.name);
      world.player.attr.name += this.attr.value;
      world.remove(this);
    }
  }
}

export default Loot;
