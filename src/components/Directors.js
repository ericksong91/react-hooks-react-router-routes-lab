import React from "react";
import { directors } from "../data";

function Directors() {

  console.log(directors)

  const directorsList = directors.map((dir, ind) => {
    const movieList = dir.movies.map((mov, index) => {
      return <li key={`Movie-${index}`}>{mov}</li>
    })
    return (
      <div key={`Director-${ind}`}>
        <h2>Name: {dir.name}</h2>
        <p>Movies:</p>
        <ul>
          {movieList}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  )
}

export default Directors;
