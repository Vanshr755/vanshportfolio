import useInView from "../hooks/useInView";

export default function SkillCard({ skill, delay = 0 }) {
  const [ref, inView] = useInView(0.3);
  const Icon = skill.icon;

  return (
    <div ref={ref} className={`card skill reveal ${inView ? "in" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="skill__icon"><Icon /></div>
      <h3>{skill.name}</h3>
      <p>{skill.desc}</p>
      <div className="bar">
        <i style={{ width: inView ? `${skill.level}%` : "0%" }} />
      </div>
      <span className="skill__percent">{skill.level}%</span>
    </div>
  );
}
