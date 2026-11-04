import React from 'react';
import {Routes,Route,Link,useParams} from 'react-router-dom';
import {games} from './games.js';
import GameCard from './GameCard.jsx';
function Catalog({items}){return <div className="grid">{items.map(game=><GameCard key={game.id} {...game}><Link to={'/game/'+game.id}>Batafsil →</Link></GameCard>)}</div>;}
function Detail({favorites,toggle}){const {id}=useParams();const game=games.find(g=>g.id===Number(id));if(!game)return <p>O‘yin topilmadi</p>;const selected=favorites.includes(game.id);return <GameCard {...game}><button aria-pressed={selected} className={selected?'gold':''} onClick={()=>toggle(game.id)}>{selected?'⭐ Sevimlidan olish':'☆ Sevimliga'}</button></GameCard>;}
export default function FavoritesLesson({favorites,toggle}){
 // App.jsx owns this state, above the changing route children.
 const selected=games.filter(game=>favorites.includes(game.id));
 return <><h1>Robo-games</h1><nav><Link to="/">Katalog</Link><Link to="/favorites">Sevimlilar ({favorites.length})</Link></nav><Routes><Route path="/" element={<Catalog items={games}/>}/><Route path="/game/:id" element={<Detail favorites={favorites} toggle={toggle}/>}/><Route path="/favorites" element={<><h2>Sevimlilar</h2>{selected.length?<Catalog items={selected}/>:<p className="empty">Hali sevimli yo‘q</p>}</>}/><Route path="*" element={<p>Sahifa topilmadi. <Link to="/">Katalogga qaytish</Link></p>}/></Routes></>;
}
