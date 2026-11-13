import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" tag={projects.tag} title={projects.title}>
      <div className="projects-grid">
        {projects.items.map((project, i) => (
          <ProjectCard key={project.title} project={project} delay={i * 100} />
        ))}
      </div>
    </Section>
  );
}
