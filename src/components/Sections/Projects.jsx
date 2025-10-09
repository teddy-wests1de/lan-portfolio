import Card from "../UI/Card";
import Section from "../UI/Section";

function Projects() {
  return (
    <div id="projects">
      <Section columns={2} bgColor="var(--card-dark)">
        <h2>Projects</h2>
        <Card />
        <Card />
        <Card />
        <Card />
      </Section>
    </div>
  );
}

export default Projects;
