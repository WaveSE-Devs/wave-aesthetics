/* global React */
const { useState } = React;

const SHOWS = [
  { id:"bench", title:"The Bench", tag:"DOC SERIES", eps:8, watched:3, hue:"#2a3328", desc:"A season inside the locker room with the league's most-traded player." },
  { id:"oflap", title:"Off Lap", tag:"PODCAST",   eps:22, watched:14, hue:"#3a3a45", desc:"Weekly conversations from the F1 paddock — between the laps, not on them." },
  { id:"cold",  title:"Cold Open", tag:"DOC FILM", eps:1,  watched:0, hue:"#1a2530", desc:"82 minutes inside the loneliest hour in football: the morning after a trade." },
  { id:"late",  title:"Late Whistle", tag:"TALK", eps:48, watched:48, hue:"#2e1a26", desc:"A weekly rebuttal show. The takes you weren't allowed to have at 6pm." },
  { id:"side",  title:"Side Quest", tag:"DOC SERIES", eps:6, watched:0, hue:"#1f2e1f", desc:"Six athletes. Six off-seasons. The work that doesn't get filmed." },
  { id:"oday",  title:"Off Day", tag:"SHORT", eps:12, watched:8, hue:"#2a2a2a", desc:"Twelve quiet minutes from the day no one watches." }
];

function Avatar() { return <div className="wo-av" />; }

function TopBar({ q, setQ, screen, setScreen }) {
  return (
    <header className="wo-top">
      <a className="wo-logo" href="#" onClick={(e)=>{e.preventDefault();setScreen({name:"home"});}}>
        <img src="../../assets/wave-logotype.svg" style={{filter:"invert(1)"}} alt="WAVE" />
      </a>
      <nav className="wo-tabs">
        {["HOME","ORIGINALS","LIVE","SCHEDULE","MY LIST"].map(t=>(
          <a key={t} className={"wo-tab "+((screen.name==="home"&&t==="HOME")||(screen.name==="originals"&&t==="ORIGINALS")?"is-active":"")}
             href="#" onClick={(e)=>{e.preventDefault();setScreen({name:t==="HOME"?"home":"originals"});}}>{t}</a>
        ))}
      </nav>
      <div className="wo-top__right">
        <input className="wo-search" placeholder="⌕  SEARCH SHOWS, EPISODES, PEOPLE" value={q} onChange={(e)=>setQ(e.target.value)} />
        <Avatar />
      </div>
    </header>
  );
}

function FeaturedHero({ onPlay }) {
  return (
    <section className="wo-hero">
      <div className="wo-hero__bg" />
      <div className="wo-hero__scrim" />
      <div className="wo-hero__copy">
        <div className="wo-eyebrow"><span className="wo-live"><span className="wo-dot" />LIVE NOW</span> &nbsp; · &nbsp; WAVE ORIGINAL</div>
        <h1 className="wo-hero__title">The Bench<br/><span className="wo-volt">Ep. 04 · The Trade</span></h1>
        <p className="wo-hero__lede">Hours after the deadline, the locker room empties. We stayed.</p>
        <div className="wo-hero__ctas">
          <button className="wo-btn wo-btn--primary" onClick={onPlay}>▶ &nbsp;WATCH NOW</button>
          <button className="wo-btn wo-btn--ghost">+ &nbsp;ADD TO LIST</button>
        </div>
        <div className="wo-hero__meta">
          <span>EP. 04 / 8</span><span>·</span><span>32 MIN</span><span>·</span><span>DOC SERIES</span><span>·</span><span>FRI · NOV 14</span>
        </div>
      </div>
    </section>
  );
}

function ShowTile({ s, onOpen }) {
  const [hover, setHover] = useState(false);
  const pct = Math.round((s.watched / s.eps) * 100);
  return (
    <article className={"wo-tile "+(hover?"is-hover":"")} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onClick={()=>onOpen(s)}>
      <div className="wo-tile__poster" style={{background:`linear-gradient(135deg, ${s.hue} 0%, #0b0909 65%)`}}>
        <span className="wo-tile__title">{s.title.toUpperCase()}</span>
        {s.watched>0 && s.watched<s.eps && (
          <div className="wo-tile__progress"><div style={{width:pct+"%"}} /></div>
        )}
      </div>
      <div className="wo-tile__meta">
        <span>{s.tag} · {s.eps} EP{s.eps>1?"S":""}</span>
        <span className="wo-tile__count">{s.watched===s.eps?"WATCHED":s.watched>0?`${s.watched}/${s.eps}`:"NEW"}</span>
      </div>
    </article>
  );
}

function Rail({ title, items, onOpen }) {
  return (
    <section className="wo-rail">
      <div className="wo-rail__head">
        <h2 className="wo-rail__title">{title}</h2>
        <a className="wo-rail__more">VIEW ALL →</a>
      </div>
      <div className="wo-rail__row">
        {items.map(s=> <ShowTile key={s.id} s={s} onOpen={onOpen} />)}
      </div>
    </section>
  );
}

function Home({ onOpen, onPlay }) {
  return (
    <main className="wo-main">
      <FeaturedHero onPlay={onPlay} />
      <Rail title="Continue watching" items={SHOWS.filter(s=>s.watched>0&&s.watched<s.eps)} onOpen={onOpen} />
      <Rail title="New Wave Originals" items={SHOWS} onOpen={onOpen} />
    </main>
  );
}

function ShowHub({ s, onPlay, onBack }) {
  const eps = Array.from({length: s.eps}, (_,i)=>({n:i+1, runtime: 24+(i*3)%18, watched: i<s.watched, title: ["The Trade","Cold Open","The Plane","Off Day","Press Run","Locker","Last Call","Closing"][i%8]}));
  return (
    <main className="wo-main">
      <button className="wo-back" onClick={onBack}>← &nbsp;BACK</button>
      <div className="wo-hub">
        <div className="wo-hub__poster" style={{background:`linear-gradient(135deg, ${s.hue} 0%, #0b0909 65%)`}}>
          <div className="wo-hub__title">{s.title.toUpperCase()}</div>
        </div>
        <div className="wo-hub__detail">
          <div className="wo-eyebrow">WAVE ORIGINAL · {s.tag}</div>
          <h1 className="wo-hub__h">{s.title}</h1>
          <p className="wo-hub__desc">{s.desc}</p>
          <div className="wo-hub__ctas">
            <button className="wo-btn wo-btn--primary" onClick={onPlay}>▶ &nbsp;{s.watched>0?"CONTINUE":"START"} · EP. {Math.max(s.watched,1)}</button>
            <button className="wo-btn wo-btn--ghost">+ &nbsp;ADD TO LIST</button>
          </div>
          <div className="wo-hub__facts">
            <div><span className="wo-spec">EPISODES</span><span className="wo-fact">{s.eps}</span></div>
            <div><span className="wo-spec">RUNTIME</span><span className="wo-fact">~32 MIN</span></div>
            <div><span className="wo-spec">RATING</span><span className="wo-fact">TV-14</span></div>
            <div><span className="wo-spec">RELEASED</span><span className="wo-fact">2026</span></div>
          </div>
        </div>
      </div>
      <section className="wo-eps">
        <div className="wo-rail__head"><h2 className="wo-rail__title">Episodes</h2><span className="wo-spec">SEASON 1</span></div>
        <ul className="wo-eps__list">
          {eps.map(e=>(
            <li key={e.n} className={"wo-ep "+(e.watched?"is-watched":"")} onClick={onPlay}>
              <span className="wo-ep__n">EP. {String(e.n).padStart(2,"0")}</span>
              <span className="wo-ep__title">{e.title}</span>
              <span className="wo-ep__rt">{e.runtime} MIN</span>
              <span className="wo-ep__cta">{e.watched? "REWATCH" : "WATCH"} →</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function Player({ s, onClose }) {
  const [playing, setPlaying] = useState(true);
  const [t, setT] = useState(19*60+48);
  const total = 32*60;
  React.useEffect(()=>{
    if(!playing) return;
    const id = setInterval(()=>setT(x=>x+1), 1000);
    return ()=>clearInterval(id);
  },[playing]);
  const fmt = (n)=>`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`;
  return (
    <div className="wo-player" onClick={()=>setPlaying(p=>!p)}>
      <div className="wo-player__bg" style={{background:`linear-gradient(135deg, ${s?.hue||"#1a2530"} 0%, #0b0909 75%)`}} />
      <div className="wo-player__top" onClick={(e)=>e.stopPropagation()}>
        <button className="wo-back" onClick={onClose}>← &nbsp;CLOSE</button>
        <div className="wo-player__crumbs">WAVE ORIGINALS / {s?.title?.toUpperCase()||"THE BENCH"} / EP. 04</div>
      </div>
      <div className="wo-player__bottom" onClick={(e)=>e.stopPropagation()}>
        <div className="wo-player__title">{s?.title || "The Bench"} · The Trade</div>
        <div className="wo-spec">EP. 04 · 32 MIN · DIRECTED BY M. RIVERA</div>
        <div className="wo-bar">
          <div className="wo-bar__fill" style={{width: (t/total*100)+"%"}} />
          <div className="wo-bar__head" style={{left:(t/total*100)+"%"}} />
        </div>
        <div className="wo-ctrls">
          <span className="wo-ic">⏮</span>
          <button className="wo-play" onClick={(e)=>{e.stopPropagation();setPlaying(p=>!p);}}>{playing?"❚❚":"▶"}</button>
          <span className="wo-ic">⏭</span>
          <span className="wo-ts">{fmt(t)} / {fmt(total)}</span>
          <span className="wo-ic">CC</span>
          <span className="wo-ic">⛶</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [screen, setScreen] = useState({ name: "home" });
  const [q, setQ] = useState("");
  const [player, setPlayer] = useState(null);
  return (
    <div className="wo">
      <TopBar q={q} setQ={setQ} screen={screen} setScreen={setScreen} />
      {screen.name === "show" ?
        <ShowHub s={screen.show} onBack={()=>setScreen({name:"home"})} onPlay={()=>setPlayer(screen.show)} /> :
        <Home onOpen={(s)=>setScreen({name:"show", show:s})} onPlay={()=>setPlayer(SHOWS[0])} />
      }
      {player && <Player s={player} onClose={()=>setPlayer(null)} />}
    </div>
  );
}

window.App = App;
