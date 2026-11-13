import Section from "./Section";
import Reveal from "./Reveal";
import { about } from "../data/portfolio";

export default function About() {
  return (
    <Section id="about" tag={about.tag} title={about.title}>
      <div className="about">
        <Reveal className="about__photo-wrap">
          <div className="about__photo">
            <img src={about.photo} alt="Vansh Rana at work" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="card about__card">
            <h3>{about.heading}</h3>
            {about.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
            <div className="highlights">
              {about.highlights.map(({ label, icon: Icon }) => (
                <div key={label} className="highlight">
                  <Icon /> <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
