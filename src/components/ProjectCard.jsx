import { FaCubes, FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Reveal from "./Reveal";

export default function ProjectCard({ project, delay = 0 }) {
  const { title, description, image, tech, github, live } = project;

  return (
    <Reveal delay={delay}>
      <article className="card project">
        <div className="project__media">
          {image ? <img src={image} alt={title} /> : <FaCubes className="project__placeholder" />}
        </div>
        <div className="project__body">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="tags">
            {tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
          {(github || live) && (
            <div className="project__links">
              {github && (
                <a className="btn btn--light btn--sm" href={github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Code
                </a>
              )}
              {live && (
                <a className="btn btn--primary btn--sm" href={live} target="_blank" rel="noopener noreferrer">
                  <FaArrowUpRightFromSquare /> Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}
