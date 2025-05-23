import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";


const Main = () => {

  return (
    <div className="main">
      {/** Item List de Artistas */}
      <ItemList title="Artistas" items={5}  itemsArray={artistArray} path="/artists" idPath="/artists" /> 

      {/** Item List de  Musicas */}
      <ItemList title="Musicas" items={10} itemsArray={songsArray} path="/songs" idPath="/songs"  />
    </div>
  );
};

export default Main;
