import Reveal from "./Reveal";

// Har section ka common wrapper: tag pill + title + gold underline.
export default function Section({ id, tag, title, alt = false, children }) {
  return (
    <section id={id} className={`section ${alt ? "section--alt" : ""}`}>
      <div className="container">
        <Reveal className="section__head">
          <span className="pill">{tag}</span>
          <h2>{title}</h2>
          <div className="underline" />
        </Reveal>
        {children}
      </div>
    </section>
  );
}
