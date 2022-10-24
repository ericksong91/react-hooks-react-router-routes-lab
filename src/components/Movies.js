import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map((mov, ind)=>{
    const genreList = mov.genres.map((gen, index)=>{
      return <li key={`Genre-${index}`}>{gen}</li>
    })

    return (<div key={`Movie-${ind}`} >
      <h2>Name: {mov.title}</h2>
      <p>Time: {mov.time}</p>
      <p>Genres:</p>
      <ul>
        {genreList}
      </ul>
    </div>)
  })

  return (
    <div>
          <h1>Movies Page</h1>
          {movieList}
    </div>


  )
}

export default Movies;
