import Loot from "./Loot";
import Monster from "./Monster";
import Stairs from "./Stairs";

// construct lootTable of items that will be placed
const lootTable = [
  {name: "Long Sword", color: "white", ascii: "/", offset: {x: 6, y: 3}},
  {name: "Health", color: "red", ascii: "i", value: 5, offset: {x: 6, y: 3}},
  {name: "Gold", color: "yellow", ascii: "$", offset: {x: 3, y: 3}},
  {name: "Armor", color: "white", ascii: "@", offset: {x: 4, y: 3}},
]

const enemyTable = [
  {
    name: "Goblin",
    color: "green",
    ascii: "**",
    offset: {x: 2, y: 3 },
    health: 3
  },
  {
    name: "Dark Elf",
    color: "grey",
    ascii: "{}",
    offset: {x: 4, y: 3},
    health: 6
  },
  {
    name: "Knight",
    color: "gold",
    ascii: "#",
    offset: {x: 3, y: 2},
    health: 9
  },
  {
    name: "Dragon",
    color: "red",
    ascii: "=~~~",
    offset: {x: 2, y: 3},
    health: 12
  }

];

class Spawn {

  constructor(world) {
    this.world = world;
  }

  initSpawn(spawnCount, createEntity) {
    for (let count = 0; count < spawnCount; count++) {
      let entity = createEntity();
      this.world.add(entity);
      this.world.startEmptySpace(entity);
    }
  }

  spawnLoot(spawnCount) {
    this.initSpawn(spawnCount, () => {
      return new Loot(
        randoInt(this.world.width - 1),
        randoInt(this.world.height - 1),
        this.world.tileSize,
        lootTable[randoInt(lootTable.length)]
      );
    });
  }

  spawnEnemy(spawnCount) {
    this.initSpawn(spawnCount, () => {
      return new Monster(
        randoInt(this.world.width - 1),
        randoInt(this.world.height - 1),
        this.world.tileSize,
        enemyTable[randoInt(enemyTable.length)]
      );
    });
  }

  spawnStairs() {
    let stairs = new Stairs(this.world.width - 10, this.world.height - 10, this.world.tileSize);
    this.world.add(stairs);
    this.world.startEmptySpace(stairs);
  }
}

function randoInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default Spawn;
