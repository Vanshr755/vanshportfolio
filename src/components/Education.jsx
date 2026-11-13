import Section from "./Section";
import Reveal from "./Reveal";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <Section id="education" tag={education.tag} title={education.title} alt>
      <div className="timeline">
        {education.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 100} className="timeline__item">
            <span className="timeline__dot" />
            <div className="card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
