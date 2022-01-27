import React from 'react';

export default function FilmList({ films }) {
  return (
    <div>
      {films.map((ghibli) => (
        <div key={ghibli.id}>
          <p>Title: {ghibli.title}</p>
          <p>Description: {ghibli.description}</p>
          <p>Director: {ghibli.director}</p>
          <img src={ghibli.image} alt={ghibli.title}></img>
        </div>
      ))}
    </div>
  );
}
