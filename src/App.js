import React from 'react';
import Rogue from "./Components/Rogue";
// functional component to map out app
const App = () => (
    <div className="App">
        <Rogue width={35} height={35} tileSize={16} />
    </div>
);

export default App;
