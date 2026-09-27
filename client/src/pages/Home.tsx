import { useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ExternalLink,
  Heart,
  MailOpen,
  Music2,
  Play,
  Sparkles,
  Star,
  X,
} from "lucide-react";

const tinyRituals = [
  {
    index: "01",
    title: "soft chaos",
    body: "أن تضحكي في اللحظة الخطأ، ثم تجعلينها اللحظة الصحيحة.",
    accent: "pink",
  },
  {
    index: "02",
    title: "october light",
    body: "فيكِ شيء يشبه آخر ضوء في يوم خريفي — دافئ، غريب، ولا يُنسى.",
    accent: "lime",
  },
  {
    index: "03",
    title: "keep this",
    body: "هذه الصفحة صغيرة، لكن حبّها لكِ ليس كذلك.",
    accent: "peach",
  },
];

const HOSTED_AUDIO_URL = "/manus-storage/we-fell-in-love-in-october_63fae868.mp3";

export default function Home() {
  const [letterOpen, setLetterOpen] = useState(false);
  const [musicOpen, setMusicOpen] = useState(false);
  const [activeRitual, setActiveRitual] = useState(0);
  const [audioUrl, setAudioUrl] = useState(HOSTED_AUDIO_URL);
  const [audioName, setAudioName] = useState("we fell in love in october");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAudioUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl(URL.createObjectURL(file));
    setAudioName(file.name);
  };

  const scrollToLetter = () => {
    document.getElementById("letter")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="birthday-page">
      <div className="noise" aria-hidden="true" />
      <div className="ambient ambient--pink" aria-hidden="true" />
      <div className="ambient ambient--lime" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#top" aria-label="Fatima birthday home">
          <span className="brand__mark">F.</span>
          <span className="brand__word">the fatima files</span>
        </a>
        <div className="topbar__note">
          <span className="topbar__dot" />
          a tiny internet love letter
        </div>
        <span className="topbar__count">01 <i>/</i> 01</span>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="eyebrow__line" />
            to Fatima, with cake crumbs
          </p>
          <h1 id="hero-title">
            you make
            <br />
            ordinary feel <em>rare</em>
            <span className="title-star" aria-hidden="true">✦</span>
          </h1>
          <p className="hero__lede">
            ليست صفحة تهنئة عادية. إنها غرفة صغيرة على الإنترنت، مضاءة
            بآخر شمس في أكتوبر، ومخبأ فيها شيء لكِ وحدكِ.
          </p>
          <div className="hero__actions">
            <button className="button button--primary" onClick={scrollToLetter}>
              افتحي الرسالة
              <ArrowDownRight size={17} strokeWidth={1.8} />
            </button>
            <button className="text-button" onClick={() => setMusicOpen(true)}>
              <Music2 size={16} />
              شغّلي الأغنية
              <ArrowUpRight size={14} />
            </button>
          </div>
          <div className="hero__signature">
            <span className="hero__signature-line" />
            <span>made with an unreasonable amount of fondness</span>
          </div>
        </div>

        <div className="hero__scene" aria-label="A handmade birthday scene">
          <div className="scene__label scene__label--top">the good kind of strange</div>
          <div className="moon" aria-hidden="true">
            <div className="moon__crater moon__crater--one" />
            <div className="moon__crater moon__crater--two" />
            <div className="moon__crater moon__crater--three" />
          </div>
          <div className="orbit orbit--one" aria-hidden="true" />
          <div className="orbit orbit--two" aria-hidden="true" />
          <span className="scene__spark scene__spark--one">✦</span>
          <span className="scene__spark scene__spark--two">+</span>
          <span className="scene__spark scene__spark--three">✦</span>

          <div className="birthday-ticket">
            <div className="birthday-ticket__top">
              <span>ADMIT ONE</span>
              <span className="birthday-ticket__dot">●</span>
              <span>FATIMA ONLY</span>
            </div>
            <div className="birthday-ticket__main">
              <span className="birthday-ticket__small">a very important date</span>
              <strong>YOUR<br />BIRTHDAY</strong>
              <div className="birthday-ticket__stamp">F<br /><small>♥</small></div>
            </div>
            <div className="birthday-ticket__bottom">
              <span>no refunds</span>
              <span>all feelings included</span>
            </div>
          </div>
          <div className="scene__scribble scene__scribble--one">best day<br />of the year →</div>
          <div className="scene__scribble scene__scribble--two">keep shining</div>
        </div>
      </section>

      <section className="letter-section" id="letter" aria-labelledby="letter-heading">
        <div className="section-rail">
          <span>01</span>
          <span className="section-rail__line" />
          <span>the letter</span>
        </div>
        <div className="letter-intro">
          <p className="eyebrow"><span className="eyebrow__line" /> a secret, sort of</p>
          <h2 id="letter-heading">some things<br /><em>deserve</em> a little drama.</h2>
          <p>اضغطي على الورقة. لا تقلقي، لا يوجد شيء محرج… تقريباً.</p>
        </div>
        <div className="letter-wrap">
          <button
            className={`letter ${letterOpen ? "letter--open" : ""}`}
            onClick={() => setLetterOpen((value) => !value)}
            aria-expanded={letterOpen}
            aria-label={letterOpen ? "Close the birthday letter" : "Open the birthday letter"}
          >
            <span className="letter__tape" aria-hidden="true" />
            <span className="letter__corner" aria-hidden="true" />
            <span className="letter__topline">
              <span>FROM: someone who thinks you're magic</span>
              <span>27—09—∞</span>
            </span>
            <span className="letter__seal" aria-hidden="true">F</span>
            {!letterOpen ? (
              <span className="letter__closed-copy">
                <span className="letter__mini">for the girl with the kindest chaos</span>
                <strong>open<br /><i>me, Fatima.</i></strong>
                <span className="letter__hint"><MailOpen size={14} /> click anywhere</span>
              </span>
            ) : (
              <span className="letter__open-copy">
                <span className="letter__date">dear Fatima,</span>
                <span className="letter__message">
                  <b>كل عام وأنتِ الشيء الجميل الذي لا يحدث كل يوم.</b>
                  <br /><br />
                  أتمنى أن تجدي في عامك الجديد أشخاصاً يرونكِ كما أنتِ تماماً: ضوءاً صغيراً، وفوضى لطيفة، وسبباً كافياً ليصبح اليوم العادي شيئاً يستحق التذكر.
                  <br /><br />
                  <i>stay weird. stay soft. stay yours.</i>
                </span>
                <span className="letter__signoff">with all the love,<br /><b>someone very lucky to know you</b> <Heart size={13} fill="currentColor" /></span>
              </span>
            )}
          </button>
          <span className="letter-shadow" aria-hidden="true" />
        </div>
      </section>

      <section className="rituals" aria-labelledby="rituals-heading">
        <div className="rituals__heading">
          <p className="eyebrow"><span className="eyebrow__line" /> evidence</p>
          <h2 id="rituals-heading">three reasons<br /><em>to celebrate you.</em></h2>
          <div className="rituals__arrows" aria-hidden="true">
            <ArrowDownRight size={28} />
            <span>swipe / tap</span>
          </div>
        </div>
        <div className="rituals__grid">
          {tinyRituals.map((ritual, index) => (
            <button
              className={`ritual ritual--${ritual.accent} ${activeRitual === index ? "ritual--active" : ""}`}
              key={ritual.index}
              onClick={() => setActiveRitual(index)}
            >
              <span className="ritual__index">{ritual.index}</span>
              <span className="ritual__icon" aria-hidden="true">
                {index === 0 ? <Sparkles size={20} /> : index === 1 ? <Star size={20} /> : <Heart size={20} />}
              </span>
              <span className="ritual__title">{ritual.title}</span>
              <span className="ritual__body">{ritual.body}</span>
              <span className="ritual__arrow"><ArrowUpRight size={17} /></span>
            </button>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer__big">happy birthday, <em>Fatima.</em></div>
        <div className="footer__bottom">
          <span>built from a soft place on the internet</span>
          <span className="footer__heart">♡</span>
          <span>come back whenever you need a little light</span>
        </div>
      </footer>

      <aside className={`music-dock ${musicOpen ? "music-dock--open" : ""}`} aria-label="Music player">
        {musicOpen ? (
          <div className="music-dock__expanded">
            <div className="music-dock__head">
              <div>
                <span className="music-dock__eyebrow">the birthday soundtrack</span>
                <strong>{audioName || "we fell in love in october"}</strong>
                <span>girl in red · hosted for Fatima</span>
              </div>
              <button className="icon-button" onClick={() => setMusicOpen(false)} aria-label="Close music player"><X size={17} /></button>
            </div>
            {audioUrl ? (
              <div className="music-uploaded">
                <div className="music-uploaded__art"><Music2 size={28} /></div>
                <audio className="music-audio" controls autoPlay src={audioUrl} />
              </div>
            ) : null}
            <input ref={fileInputRef} className="sr-only" type="file" accept="audio/*" onChange={handleAudioUpload} />
            {audioUrl && <button className="music-dock__change" onClick={() => fileInputRef.current?.click()}><ExternalLink size={13} /> تغيير الملف</button>}
          </div>
        ) : (
          <button className="music-dock__collapsed" onClick={() => setMusicOpen(true)}>
            <span className="music-dock__play"><Play size={15} fill="currentColor" /></span>
            <span className="music-dock__equalizer" aria-hidden="true"><i /><i /><i /><i /></span>
            <span><b>we fell in love in october</b><small>girl in red</small></span>
            <Music2 size={17} />
          </button>
        )}
      </aside>
    </main>
  );
}
