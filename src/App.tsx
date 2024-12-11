// import { useState } from 'react'
// import './App.css'
import { useState } from 'react';
import './index.css'
import LessonCard from "./LessonCard";
import LessonNumber from './LessonNumber';
import Topics from './Topics';
import LessonForm from './LessonForm';




function App() {
  const [orak, setOrak] = useState([
    {
      oraszam: 1,
      cim: "Bevezetés a webfejlesztésbe",
      leiras: "Weboldalak működése és HTML áttekintés"
    },
    {
      oraszam: 2,
      cim: "Fejlesztői környezetek",
      leiras: "Az online és professzionális fejlesztői eszközök áttekintése. A Visual Studio Code telepítése és alapvető használatának bemutatása."
    },
    {
      oraszam: 3,
      cim: "Alapvető HTML tagek",
      leiras: "Legfontosabb tagek használata: h1-h6, img, p, a."
    },
    {
      oraszam: 4,
      cim: "HTML attribútomok és szövegformázás",
      leiras: "Attribútomok: id, class és szövegformázás"
    },
    {
      oraszam: 5,
      cim: "HTML listák és táblázatok",
      leiras: "Listaelemek (ul, ol) és táblázatok (table)"
    },
  ]);
  
  return (
    <main>
      <h1>Bevezetés a programozásba</h1>
      <hr />
      <LessonNumber orakATanmenetben={orak.length} />
      <hr />
      <Topics />
      <hr />
      <LessonForm onOraHozzaad={(ujOra) => setOrak((prev) => [...prev, ujOra])} />
      <hr />
      <section className='ora-grid'>
          {orak.map((ora, index) => (
             <LessonCard key={index} oraszam={`${index + 1}. óra`} cim={ora.cim} onKartyaTorles={() => setOrak((prev) => prev.filter((ora, i) => i != index))}>
                {ora.leiras}
             </LessonCard>
          ))}
      </section>
    </main>
  );
};

export default App;