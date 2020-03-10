import React, {useRef, useEffect, useState } from 'react';
import InputManager from "./InputManager";
import Spawn from "./Spawn";
import World from "./World";

// functional component with `props` destructured

// BLOCK BODY = component with brackets, used for multiple element `return` statements
// CONCISE BODY = single-line return component, implicit return statement
const Rogue = ({ width, height, tileSize }) => {
  const canvasRef = useRef();
  const [world, setWorld] = useState(new World(width, height,tileSize));
  let inputManager = new InputManager();
  const handleInput = (action, data) => {
    let newWorld = new World();
    Object.assign(newWorld, world);
    newWorld.movePlayer(data.x, data.y);
    setWorld(newWorld);
  };
  // hooks



  // `useEffect` is a lifecycle hook, gets called when DOM changes
  useEffect(() => {
    let newWorld = new World();
    Object.assign(newWorld, world);
    // call to create map with walls in it
    newWorld.createCellularMap();
    // render player
    newWorld.startEmptySpace(world.player);
    // set up items to spawn
    let renSpawn = new Spawn(newWorld);
    // spawn items
    renSpawn.spawnLoot(10);
    renSpawn.spawnEnemy(15);
    setWorld(newWorld);
    // empty array saves as `world` map to keep from re-rendering with each player/entity move
    // eslint-disable-next-line
  },[]);

  // useEffect to handle key inputs
  useEffect(() => {
    inputManager.bindKeys();
    inputManager.subscribe(handleInput);
    return () => {
      inputManager.unbindKeys();
      inputManager.unsubscribe(handleInput);
    };
  });

  // re-render world
  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0,0, width * tileSize, height * tileSize);
    world.draw(ctx);
  });


  return (
    <div className="container" style={{ display: "flex" }}>
      <canvas
        ref={canvasRef}
        width={width * tileSize}
        height={height * tileSize}
        style={{ border: '1px solid black', background: '#000'}}
      >
      </canvas>
      <div className="Game_Stats" style={{ margin: "1em", padding: "1.5em", background: "black", color: "white" }}>
        <p>Player Inventory:</p>
        <ul>
          <li>Health: {world.player.attr.health}</li>
          <li>Armor: {world.player.attr.armor}</li>
          <li>Weapon Upgrade: {world.player.attr.weapon}</li>
          <li>Gold: {world.player.attr.gold}</li>
        </ul>
        <p>Combat Log:</p>
        <ul>
          {world.history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Rogue;
