import { useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronRight,
  Crown,
  Feather,
  Flame,
  Heart,
  MoonStar,
  Pause,
  Play,
  ScrollText,
  WandSparkles,
} from "lucide-react";

const HOSTED_AUDIO_URL = "/we-fell-in-love-in-october.mp3";

const blessings = [
  {
    number: "I",
    icon: Crown,
    title: "The birthday crown",
    body: "Tonight the stars bow softly: this chapter belongs to you, your strange beauty, and your brightest becoming.",
  },
  {
    number: "II",
    icon: WandSparkles,
    title: "A little enchantment",
    body: "May the year ahead bring midnight laughter, impossible wishes, and tiny miracles with your name on them.",
  },
  {
    number: "III",
    icon: Flame,
    title: "The red candle",
    body: "May your inner flame stay wild and warm — never dimmed, never apologetic, always unmistakably Fatima.",
  },
];

export default function Home() {
  const [letterOpen, setLetterOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="gothic-page">
      <div className="gothic-page__grain" aria-hidden="true" />
      <div className="gothic-page__glow gothic-page__glow--red" aria-hidden="true" />
      <div className="gothic-page__glow gothic-page__glow--violet" aria-hidden="true" />

      <header className="gothic-nav">
        <a className="gothic-brand" href="#top" aria-label="Fatima birthday home">
          <span className="gothic-brand__sigil">F</span>
          <span><b>the fatima files</b><small>an internet relic · 01/10</small></span>
        </a>
        <div className="gothic-nav__center"><span /> a birthday rite begins <span /></div>
        <button className="gothic-nav__link" onClick={() => scrollTo("letter")}>
          enter the ritual <ArrowUpRight size={14} />
        </button>
      </header>

      <section className="gothic-hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="gothic-kicker"><span className="gothic-kicker__rule" /> for Fatima · the birthday rite</p>
          <h1 id="hero-title">tonight<br /><em>the stars</em><br />celebrate you.</h1>
          <p className="hero-intro">On the first of October, the night keeps a secret: it was made a little more beautiful the day you arrived.</p>
          <div className="hero-actions">
            <button className="gothic-button" onClick={() => scrollTo("letter")}>
              <span>Read your birthday blessing</span><ArrowDown size={17} />
            </button>
            <button className="gothic-text-button" onClick={toggleMusic}>
              {isPlaying ? <Pause size={15} fill="currentColor" /> : <Play size={15} fill="currentColor" />}
              {isPlaying ? "pause the birthday spell" : "play the birthday song"}
            </button>
          </div>
          <div className="hero-footnote"><span /> sealed on your birthday night <span /></div>
        </div>

        <div className="sigil-stage" aria-label="A crimson birthday sigil for Fatima">
          <div className="sigil-stage__caption">the birthday omen</div>
          <div className="sigil-orbit sigil-orbit--outer" />
          <div className="sigil-orbit sigil-orbit--middle" />
          <div className="sigil-orbit sigil-orbit--inner" />
          <div className="sigil-moon"><MoonStar size={35} strokeWidth={1} /><span>F</span></div>
          <div className="sigil-star sigil-star--one">✦</div>
          <div className="sigil-star sigil-star--two">✧</div>
          <div className="sigil-star sigil-star--three">+</div>
          <div className="sigil-stage__date"><b>01</b><span>october</span><b>10</b></div>
          <div className="sigil-stage__label">born for beautiful things</div>
        </div>
      </section>

      <section className="manifesto" aria-labelledby="manifesto-title">
        <div className="section-marker"><span>01</span><i /><span>the invocation</span></div>
        <div className="manifesto__content">
          <p className="gothic-kicker"><span className="gothic-kicker__rule" /> a birthday incantation</p>
          <h2 id="manifesto-title">Fatima is the kind of<br /><em>birthday magic that lingers.</em></h2>
          <p className="manifesto__body">This is a small room on the internet, lit for one birthday girl only. Leave the ordinary at the door. Tonight, every candle, star, and wish is here to celebrate you.</p>
          <div className="manifesto__quote"><span>“</span><p>may every year make<br /><em>your light more fearless.</em></p></div>
        </div>
        <div className="manifesto__aside"><span className="aside-line" /><MoonStar size={20} /><p>the birthday<br />stars are listening.</p></div>
      </section>

      <section className="letter-section" id="letter" aria-labelledby="letter-title">
        <div className="section-marker"><span>02</span><i /><span>the birthday scroll</span></div>
        <div className="letter-heading">
          <p className="gothic-kicker"><span className="gothic-kicker__rule" /> private birthday correspondence</p>
          <h2 id="letter-title">a blessing between<br /><em>you and the stars.</em></h2>
          <p>Break the seal when you are ready. A birthday wish has been written for you in red ink and moonlight.</p>
        </div>
        <div className="letter-scene">
          <button className={`sealed-letter ${letterOpen ? "sealed-letter--open" : ""}`} onClick={() => setLetterOpen((value) => !value)} aria-expanded={letterOpen} aria-label={letterOpen ? "Close the birthday letter" : "Open the birthday letter"}>
            <span className="sealed-letter__top"><span>FROM: THE NIGHT · FOR FATIMA</span><span>01—10—∞</span></span>
            <span className="sealed-letter__seal">F</span>
            {!letterOpen ? (
              <span className="sealed-letter__closed"><small>for the birthday girl with the kindest chaos</small><strong>open<br /><em>your wish.</em></strong><span><ScrollText size={14} /> unseal the blessing</span></span>
            ) : (
              <span className="sealed-letter__open"><small>dear Fatima, on your birthday,</small><p><b>Happy birthday to the beautiful thing that does not happen every day.</b><br /><br />May this new year open its velvet doors to you. May your wishes find their way home, your laughter stay loud, and every version of you feel worthy of being celebrated.<br /><br /><em>stay strange. stay soft. stay brilliantly yours.</em></p><strong>with all the love,<br />the night is lucky to know you <Heart size={13} fill="currentColor" /></strong></span>
            )}
          </button>
          <span className="letter-shadow" aria-hidden="true" />
          <div className="letter-scene__note"><Feather size={18} /> <span>the birthday ink is still warm</span></div>
        </div>
      </section>

      <section className="blessings" aria-labelledby="blessings-title">
        <div className="section-marker"><span>03</span><i /><span>birthday blessings</span></div>
        <div className="blessings__heading"><p className="gothic-kicker"><span className="gothic-kicker__rule" /> three charms for tonight</p><h2 id="blessings-title">blessings for<br /><em>your new year.</em></h2><span className="blessings__arrow"><ArrowDown size={22} /><small>scroll / linger</small></span></div>
        <div className="blessings-grid">
          {blessings.map(({ number, icon: Icon, title, body }) => (
            <article className="blessing-card" key={number}>
              <div className="blessing-card__top"><span>{number}</span><Icon size={22} strokeWidth={1.2} /></div>
              <h3>{title}</h3><p>{body}</p><ChevronRight className="blessing-card__arrow" size={18} />
            </article>
          ))}
        </div>
      </section>

      <footer className="gothic-footer">
        <div className="footer-sigil">✦</div>
        <p className="gothic-kicker">the birthday rite is sealed</p>
        <h2>happy birthday,<br /><em>Fatima.</em></h2>
        <p className="gothic-footer__line">make a wish · blow the candle · keep shining</p>
        <div className="gothic-footer__bottom"><span>01 / 10 / forever</span><span>made for one beautiful oddity</span><span>♡</span></div>
      </footer>

      <aside className="music-dock gothic-music" aria-label="Music player">
        <audio ref={audioRef} src={HOSTED_AUDIO_URL} onEnded={() => setIsPlaying(false)} preload="metadata" />
        <button onClick={toggleMusic} aria-label={isPlaying ? "Pause birthday song" : "Play birthday song"}>
          <span className="gothic-music__play">{isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}</span>
          <span className="gothic-music__bars" aria-hidden="true"><i /><i /><i /><i /></span>
          <span><b>we fell in love in october</b><small>girl in red · Fatima's birthday soundtrack</small></span>
          <MoonStar size={15} />
        </button>
      </aside>
    </main>
  );
}
