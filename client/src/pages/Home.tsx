import { useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronRight,
  Eye,
  Feather,
  Heart,
  MailOpen,
  Moon,
  Pause,
  Play,
  Shield,
  Sparkles,
  Star,
} from "lucide-react";

const HOSTED_AUDIO_URL = "/manus-storage/we-fell-in-love-in-october_63fae868.mp3";

const blessings = [
  {
    number: "I",
    icon: Shield,
    title: "Unwavering grace",
    body: "May you walk into this new year with the quiet power of someone who knows her own light.",
  },
  {
    number: "II",
    icon: Sparkles,
    title: "Endless magic",
    body: "May the strange little moments find you often — and may they always feel like home.",
  },
  {
    number: "III",
    icon: Eye,
    title: "A certain kind of rare",
    body: "May you never make yourself smaller just to make the ordinary feel comfortable.",
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
        <div className="gothic-nav__center"><span /> a new cycle begins <span /></div>
        <button className="gothic-nav__link" onClick={() => scrollTo("letter")}>
          enter the archive <ArrowUpRight size={14} />
        </button>
      </header>

      <section className="gothic-hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="gothic-kicker"><span className="gothic-kicker__rule" /> for Fatima · the October awakening</p>
          <h1 id="hero-title">a little<br /><em>night magic</em><br />for you.</h1>
          <p className="hero-intro">Some people arrive like a season. You arrived like a secret — soft, strange, and impossible to forget.</p>
          <div className="hero-actions">
            <button className="gothic-button" onClick={() => scrollTo("letter")}>
              <span>Descend into the letter</span><ArrowDown size={17} />
            </button>
            <button className="gothic-text-button" onClick={toggleMusic}>
              {isPlaying ? <Pause size={15} fill="currentColor" /> : <Play size={15} fill="currentColor" />}
              {isPlaying ? "pause the spell" : "play the soundtrack"}
            </button>
          </div>
          <div className="hero-footnote"><span /> forged with unreasonable fondness <span /></div>
        </div>

        <div className="sigil-stage" aria-label="A crimson birthday sigil for Fatima">
          <div className="sigil-stage__caption">the good kind of strange</div>
          <div className="sigil-orbit sigil-orbit--outer" />
          <div className="sigil-orbit sigil-orbit--middle" />
          <div className="sigil-orbit sigil-orbit--inner" />
          <div className="sigil-moon"><Moon size={35} strokeWidth={1} /><span>F</span></div>
          <div className="sigil-star sigil-star--one">✦</div>
          <div className="sigil-star sigil-star--two">✧</div>
          <div className="sigil-star sigil-star--three">+</div>
          <div className="sigil-stage__date"><b>01</b><span>october</span><b>10</b></div>
          <div className="sigil-stage__label">born under a soft red moon</div>
        </div>
      </section>

      <section className="manifesto" aria-labelledby="manifesto-title">
        <div className="section-marker"><span>01</span><i /><span>the invocation</span></div>
        <div className="manifesto__content">
          <p className="gothic-kicker"><span className="gothic-kicker__rule" /> a birthday incantation</p>
          <h2 id="manifesto-title">to be Fatima is to make<br /><em>ordinary things glow.</em></h2>
          <p className="manifesto__body">This is not a normal birthday page. It is a small room on the internet, lit for one person only. Leave the noise at the door. The night has something to tell you.</p>
          <div className="manifesto__quote"><span>“</span><p>you are allowed to become<br /><em>more yourself</em> every year.</p></div>
        </div>
        <div className="manifesto__aside"><span className="aside-line" /><Moon size={20} /><p>the shadows<br />are listening.</p></div>
      </section>

      <section className="letter-section" id="letter" aria-labelledby="letter-title">
        <div className="section-marker"><span>02</span><i /><span>the sealed letter</span></div>
        <div className="letter-heading">
          <p className="gothic-kicker"><span className="gothic-kicker__rule" /> private correspondence</p>
          <h2 id="letter-title">a pact between<br /><em>you and the night.</em></h2>
          <p>Break the seal when you are ready. There is no embarrassing prophecy inside. Probably.</p>
        </div>
        <div className="letter-scene">
          <button className={`sealed-letter ${letterOpen ? "sealed-letter--open" : ""}`} onClick={() => setLetterOpen((value) => !value)} aria-expanded={letterOpen} aria-label={letterOpen ? "Close the birthday letter" : "Open the birthday letter"}>
            <span className="sealed-letter__top"><span>FROM: SOMEONE WHO THINKS YOU'RE MAGIC</span><span>01—10—∞</span></span>
            <span className="sealed-letter__seal">F</span>
            {!letterOpen ? (
              <span className="sealed-letter__closed"><small>for the girl with the kindest chaos</small><strong>open<br /><em>me, Fatima.</em></strong><span><MailOpen size={14} /> click to unseal</span></span>
            ) : (
              <span className="sealed-letter__open"><small>dear Fatima,</small><p><b>Happy birthday to the beautiful thing that does not happen every day.</b><br /><br />May this new year bring you people who see you exactly as you are: a little light, a gentle mess, and enough reason to make an ordinary day worth remembering.<br /><br /><em>stay weird. stay soft. stay yours.</em></p><strong>with all the love,<br />someone very lucky to know you <Heart size={13} fill="currentColor" /></strong></span>
            )}
          </button>
          <span className="letter-shadow" aria-hidden="true" />
          <div className="letter-scene__note"><Feather size={18} /> <span>the ink is still warm</span></div>
        </div>
      </section>

      <section className="blessings" aria-labelledby="blessings-title">
        <div className="section-marker"><span>03</span><i /><span>dark blessings</span></div>
        <div className="blessings__heading"><p className="gothic-kicker"><span className="gothic-kicker__rule" /> three things we know</p><h2 id="blessings-title">blessings for<br /><em>your next chapter.</em></h2><span className="blessings__arrow"><ArrowDown size={22} /><small>scroll / linger</small></span></div>
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
        <p className="gothic-kicker">the pact is sealed</p>
        <h2>happy birthday,<br /><em>Fatima.</em></h2>
        <p className="gothic-footer__line">stay fierce · stay tender · keep shining</p>
        <div className="gothic-footer__bottom"><span>01 / 10 / forever</span><span>made for one beautiful oddity</span><span>♡</span></div>
      </footer>

      <aside className="music-dock gothic-music" aria-label="Music player">
        <audio ref={audioRef} src={HOSTED_AUDIO_URL} onEnded={() => setIsPlaying(false)} preload="metadata" />
        <button onClick={toggleMusic} aria-label={isPlaying ? "Pause birthday song" : "Play birthday song"}>
          <span className="gothic-music__play">{isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}</span>
          <span className="gothic-music__bars" aria-hidden="true"><i /><i /><i /><i /></span>
          <span><b>we fell in love in october</b><small>girl in red · the birthday soundtrack</small></span>
          <Star size={15} />
        </button>
      </aside>
    </main>
  );
}
