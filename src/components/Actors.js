import React from "react";
import { actors } from "../data";

function Actors() {

  console.log(actors)

  const actorsList = actors.map((act, ind)=>{
    const movieList = act.movies.map((mov, index) => {
      return <li key={`Movie-${index}`}>{mov}</li>
    })
    return (
      <div key={`Actors-${ind}`}>
        <h2>Name: {act.name}</h2>
        <p>Movies:</p>
        <ul>
          {movieList}
        </ul>
      </div>
    )
  })

  return (
  <div>
    <h1>Actors Page</h1>
    {actorsList}
  </div>
  )
}

export default Actors;
