import { useMemo, useState } from "react";
import { profile, education, technicalFocus, technologies, projects, collab, interests, courses } from "./data.js";

const NAV = ["about", "skills", "projects", "courses", "contact"];
const BASE = import.meta.env.BASE_URL;
const matUrl = (m) => (m.type === "repo" ? `${BASE}materials/${m.url}` : m.url);

function skyline(seed, count, min, max, bg, wc) {
  let s = seed;
  const r = () => (s = (s * 9301 + 49297) % 233280) / 233280;
  return Array.from({ length: count }, () => ({
    w: 30 + Math.floor(r() * 40),
    h: min + Math.floor(r() * (max - min)),
    on: r() > 0.5,
    d: (2 + r() * 3).toFixed(1),
    bg, wc
  }));
}

function Row({ list, dur, bottom }) {
  return (
    <div className="row" style={{ bottom, animationDuration: dur + "s" }} aria-hidden>
      {[...list, ...list].map((b, i) => (
        <div className="bd" key={i} style={{ width: b.w, height: b.h, background: b.bg }}>
          <i style={{ backgroundImage: `repeating-linear-gradient(90deg,transparent 0 3px,${b.on ? b.wc[0] : b.wc[1]} 3px 7px)`, animation: b.on ? `wk ${b.d}s steps(1) infinite` : "none" }} />
          <b style={{ backgroundImage: `repeating-linear-gradient(0deg,${b.bg} 0 5px,transparent 5px 11px)` }} />
        </div>
      ))}
    </div>
  );
}

function Hero() {
  const far = useMemo(() => skyline(7, 22, 90, 190, "#12324a", ["#4ad6ff", "#2f7ea0"]), []);
  const near = useMemo(() => skyline(21, 22, 60, 140, "#071420", ["#ffb54a", "#ff5f9e"]), []);
  return (
    <section className="hero" id="top">
      <div className="moon" aria-hidden><i /></div>
      <div className="ufo" aria-hidden><div><span className="u1" /><span className="u2" /><span className="u3" /></div></div>
      <Row list={far} dur={60} bottom={90} />
      <Row list={near} dur={30} bottom={56} />
      <div className="ground" aria-hidden /><div className="road" aria-hidden />
      <div className="sign-wrap">
        <h1 className="sign">{profile.name}</h1>
        <p className="sub">{profile.tagline}</p>
      </div>
      <div className="shops">
        <a className="shop" href="#courses"><span>open</span>Courses</a>
        <a className="shop" href="#projects"><span>open</span>Projects</a>
        <a className="shop" href="#about"><span>open</span>About me</a>
      </div>
    </section>
  );
}

function Course({ c }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={"course" + (open ? " open" : "")}>
      <button className="course-head" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span><strong>{c.title}</strong><small>{c.provider} · {c.year}</small></span>
        <span className="chev" aria-hidden>{open ? "−" : "+"}</span>
      </button>
      <div className="course-panel" hidden={!open}>
        <p>{c.summary}</p>
        <div className="tags">{c.tags.map((t) => <span key={t}>{t}</span>)}</div>
        <ul className="mats">
          {c.materials.map((m) => (
            <li key={m.label}><a href={matUrl(m)} target="_blank" rel="noreferrer"><em>{m.type === "drive" ? "Drive" : "File"}</em> {m.label}</a></li>
          ))}
          {c.certificate && <li><a href={c.certificate} target="_blank" rel="noreferrer"><em>Cert</em> Certificate</a></li>}
        </ul>
      </div>
    </article>
  );
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("All");
  const allTags = useMemo(() => ["All", ...new Set(courses.flatMap((c) => c.tags))], []);
  const shown = courses.filter((c) => {
    const hay = (c.title + c.provider + c.tags.join(" ")).toLowerCase();
    return hay.includes(q.toLowerCase()) && (tag === "All" || c.tags.includes(tag));
  });

  return (
    <>
      <header className="nav">
        <a href="#top" className="logo">&lt;{profile.name.split(" ")[0]} /&gt;</a>
        <button className="burger" aria-label="Toggle menu" aria-expanded={menu} onClick={() => setMenu(!menu)}>☰</button>
        <nav className={menu ? "show" : ""}>
          {NAV.map((n) => <a key={n} href={`#${n}`} onClick={() => setMenu(false)}>{n}</a>)}
        </nav>
      </header>
      <Hero />
      <main>
        <section id="about"><h2>About</h2>
          {profile.about.map((p, i) => <p key={i} className="prose">{p}</p>)}
          <div className="tl">{education.map((e) => (
            <div key={e.school}><strong>{e.school}</strong><span> · {e.degree} · {e.period}</span><p className="muted">{e.note}</p></div>
          ))}</div>
        </section>

        <section id="skills"><h2>Technical focus</h2>
          <div className="grid">{technicalFocus.map((f) => (
            <div className="box" key={f.title}><h3>{f.title}</h3><ul>{f.items.map((i) => <li key={i}>{i}</li>)}</ul></div>
          ))}</div>
          <h3 className="sub-h">Technologies</h3>
          <div className="tags big">{technologies.map((t) => <span key={t}>{t}</span>)}</div>
          <h3 className="sub-h">Research interests</h3>
          <div className="tags big">{interests.map((t) => <span key={t}>{t}</span>)}</div>
        </section>

        <section id="projects"><h2>Selected projects</h2>
          <div className="grid">{projects.map((p) => (
            <a className="box link" key={p.title} href={p.url} target="_blank" rel="noreferrer">
              <h3>{p.title}</h3><p>{p.description}</p>
              <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </a>
          ))}</div>
          <p className="muted collab">Collaborative work: <a href={collab.url} target="_blank" rel="noreferrer">{collab.title}</a>. {collab.note}</p>
        </section>

        <section id="courses"><h2>Completed courses</h2>
          <p className="muted">Open a course to get its materials.</p>
          <div className="filters">
            <input type="search" placeholder="Search courses, providers, topics" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search courses" />
            <div className="chips">{allTags.map((t) => (
              <button key={t} className={t === tag ? "on" : ""} onClick={() => setTag(t)}>{t}</button>
            ))}</div>
          </div>
          <div className="courses">
            {shown.map((c) => <Course key={c.title} c={c} />)}
            {!shown.length && <p className="muted">No course matches. Clear the search or pick "All".</p>}
          </div>
        </section>

        <section id="contact"><h2>Contact</h2>
          <p className="prose">{profile.footnote}</p>
          <p className="prose">Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <div className="cta">{profile.links.map((l) => <a key={l.label} className="btn" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>)}</div>
        </section>
      </main>
      <footer>© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
