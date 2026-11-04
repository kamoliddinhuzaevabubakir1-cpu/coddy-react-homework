import React from 'react';
export default function GameCard({name,emoji,rating,players,genre,children}) {
 return <article className="card"><div className="art" aria-hidden="true">{emoji}</div><h2>{name}</h2>{rating != null && <p>⭐ Reyting: {rating}/10</p>}{players && <p>👥 {players}</p>}{genre && <p className="badge">{genre}</p>}{children}</article>;
}
