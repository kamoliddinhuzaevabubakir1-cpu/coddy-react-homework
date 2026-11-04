import React,{useState,useEffect} from 'react';
import GameCard from './GameCard.jsx';
export default function LikesLesson(){
 const [likes,setLikes]=useState(0);
 const [favorite,setFavorite]=useState(false);
 useEffect(()=>{document.title=likes+' like';},[likes]);
 useEffect(()=>{console.log('Kartochka chiqdi');},[]);
 return <><h1>GameCard’ni jonlantiring</h1><GameCard name="Minecraft" emoji="⛏️" rating={9.5}><div className="actions"><button onClick={()=>setLikes(previous=>previous+1)}>👍 {likes} like</button><button className={favorite?'gold':'secondary'} aria-pressed={favorite} onClick={()=>setFavorite(previous=>!previous)}>{favorite?'⭐ Sevimlida':'☆ Sevimli'}</button></div></GameCard></>;
}
