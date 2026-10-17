import { useEffect, useMemo, useState } from "react";
import { profile, education, skills, projects, interests, courses } from "./data.js";

const NAV = ["about", "education", "skills", "projects", "courses", "interests", "contact"];
const BASE = import.meta.env.BASE_URL;
const matUrl = (m) => (m.type === "repo" ? `${BASE}materials/${m.url}` : m.url);

function Typing({ lines }) {
  const [text, setText] = useState("");
  useEffect(() => {
    const full = lines.join("\n");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setText(full);
    let i = 0;
    const t = setInterval(() => { i++; setText(full.slice(0, i)); if (i >= full.length) clearInterval(t); }, 28);
    return () => clearInterval(t);
  }, []);
  return <pre className="term-body">{text}<span className="caret" /></pre>;
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
            <li key={m.label}>
              <a href={matUrl(m)} target="_blank" rel="noreferrer">
                <em>{m.type === "drive" ? "Drive" : "File"}</em> {m.label}
              </a>
            </li>
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

      <main id="top">
        <section className="hero">
          <div>
            <h1>{profile.name}</h1>
            <p className="role">{profile.role}</p>
            <p className="lead">{profile.tagline}</p>
            <div className="cta">
              <a className="btn primary" href="#courses">Browse my courses</a>
              <a className="btn" href="#contact">Contact me</a>
            </div>
          </div>
          <div className="term" aria-hidden>
            <div className="term-bar"><i /><i /><i /></div>
            <Typing lines={["$ whoami", profile.name, "$ cat interests.txt", ...interests.slice(0, 3), "$ ls courses | wc -l", String(courses.length)]} />
          </div>
        </section>

        <section id="about"><h2>About</h2>{profile.about.map((p, i) => <p key={i} className="prose">{p}</p>)}</section>

        <section id="education"><h2>Education</h2>
          <div className="timeline">{education.map((e) => (
            <div key={e.school} className="tl"><span className="when">{e.period}</span>
              <div><strong>{e.school}</strong><p>{e.degree}</p><p className="muted">{e.note}</p></div></div>
          ))}</div>
        </section>

        <section id="skills"><h2>Skills</h2>
          <div className="grid">{Object.entries(skills).map(([k, v]) => (
            <div className="box" key={k}><h3>{k}</h3><div className="tags">{v.map((s) => <span key={s}>{s}</span>)}</div></div>
          ))}</div>
        </section>

        <section id="projects"><h2>Projects</h2>
          <div className="grid">{projects.map((p) => (
            <a className="box link" key={p.title} href={p.url} target="_blank" rel="noreferrer">
              <h3>{p.title}</h3><p>{p.description}</p>
              <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </a>
          ))}</div>
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

        <section id="interests"><h2>Research interests</h2>
          <div className="tags big">{interests.map((i) => <span key={i}>{i}</span>)}</div>
        </section>

        <section id="contact"><h2>Contact</h2>
          <p className="prose">Email me at <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <div className="cta">{profile.links.map((l) => <a key={l.label} className="btn" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>)}</div>
        </section>
      </main>
      <footer>© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
