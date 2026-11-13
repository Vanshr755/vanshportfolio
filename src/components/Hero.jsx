import { FaDiagramProject, FaPaperPlane, FaDownload } from "react-icons/fa6";
import { profile, techBadges } from "../data/portfolio";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <span className="hero__greeting">{profile.greeting}</span>
          <h1>{profile.name}</h1>
          <h2 className="hero__role">{profile.role}</h2>
          <p>{profile.intro}</p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#projects"><FaDiagramProject /> View My Projects</a>
            <a className="btn btn--light" href="#contact"><FaPaperPlane /> Contact Me</a>
            <a className="btn btn--light" href={profile.resume} download><FaDownload /> Download Resume</a>
          </div>

          <SocialLinks />
        </div>

        <div className="hero__visual">
          <div className="hero__blob" />
          <div className="hero__photo">
            <img src={profile.photo} alt={profile.name} />
          </div>
          {techBadges.map((b) => (
            <span key={b.label} className={`badge badge--${b.position}`} style={{ color: b.color }}>
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
