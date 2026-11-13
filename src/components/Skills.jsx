import Section from "./Section";
import SkillCard from "./SkillCard";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" tag={skills.tag} title={skills.title} alt>
      <div className="skills-grid">
        {skills.items.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} delay={(i % 4) * 80} />
        ))}
      </div>
    </Section>
  );
}
