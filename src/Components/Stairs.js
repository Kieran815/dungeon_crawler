import Entity from "./Entity";
import Spawn from "./Spawn";

class Stairs extends Entity {
  attr = {
    name: "Stairs",
    color: "white",
    ascii: "ZZZZZZZ",
    offset: {x: 0, y: 0}
  }

  action(verb, world) {
    if(verb === 'bump') {
      world.addToHistory("Moving Deeper Into The Forest...");
      world.createCellularMap();
      world.player.x = 0;
      world.player.y = 0;
      world.movePlayer(world.player);
      world.entities = world.entities.filter(e => e === world.player);
      let spawn = new Spawn(world);
      spawn.spawnLoot(10);
      spawn.spawnEnemy(15);
      spawn.spawnStairs(1);
    }
  }
}

export default Stairs;
