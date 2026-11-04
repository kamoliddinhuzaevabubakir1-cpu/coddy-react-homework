import React,{useState} from 'react';
import {BrowserRouter,useNavigate} from 'react-router-dom';
import GameCard from './GameCard.jsx';
import {games} from './games.js';
import LikesLesson from './LikesLesson.jsx';
import CrudLesson from './CrudLesson.jsx';
import UsersLesson from './UsersLesson.jsx';
import PostsLesson from './PostsLesson.jsx';
import FavoritesLesson from './FavoritesLesson.jsx';
import CarsLesson from './CarsLesson.jsx';
import ClubLesson from './ClubLesson.jsx';
const lessons=[['components','3 · Komponent'],['likes','4 · State / Effect'],['props','6 · Props'],['crud','7 · CRUD'],['users','8 · Fetch'],['posts','9 · POST / PUT / DELETE'],['favorites','11 · Router'],['cars','12 · AvtoIjara'],['club','13 · GameClub']];
function Workspace(){
 const [lesson,setLesson]=useState(()=>new URLSearchParams(location.search).get('lesson')||'components');
 const [favorites,setFavorites]=useState([]);
 const toggleFavorite=id=>setFavorites(previous=>previous.includes(id)?previous.filter(value=>value!==id):[...previous,id]);
 const navigate=useNavigate();
 const changeLesson=value=>{setLesson(value);navigate('/?lesson='+value);};
 let content;
 if(lesson==='components') content=<><h1>Sevimli o‘yinlar</h1><p>Bir komponent — uch xil props.</p><div className="grid"><GameCard name="Minecraft" emoji="⛏️" rating={9.5}/><GameCard name="Rocket League" emoji="🚀" rating={9.1}/><GameCard name="Stardew Valley" emoji="🌱" rating={9.7}/></div></>;
 else if(lesson==='props') content=<><h1>O‘yinlar katalogi</h1><p>{games.length} ta o‘yin · massiv → map → GameCard</p><div className="grid">{games.map(game=><GameCard key={game.id} {...game}/>)}</div></>;
 else if(lesson==='likes')content=<LikesLesson/>;
 else if(lesson==='crud')content=<CrudLesson/>;
 else if(lesson==='users')content=<UsersLesson/>;
 else if(lesson==='posts')content=<PostsLesson/>;
 else if(lesson==='favorites')content=<FavoritesLesson favorites={favorites} toggle={toggleFavorite}/>;
 else if(lesson==='cars')content=<CarsLesson/>;
 else if(lesson==='club')content=<ClubLesson/>;
 else content=<p>Noma’lum dars. Yuqoridan darsni tanlang.</p>;
 return <><header><strong>CODDY / REACT LAB</strong><label>Dars <select value={lesson} onChange={e=>changeLesson(e.target.value)}>{lessons.map(([id,label])=><option key={id} value={id}>{label}</option>)}</select></label></header><main>{content}</main></>;
}
export default function App(){return <BrowserRouter><Workspace/></BrowserRouter>;}
