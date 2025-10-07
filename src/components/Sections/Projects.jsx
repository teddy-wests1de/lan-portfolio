import Card from "../UI/Card";
import Section from "../UI/Section";

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <Section columns={2} bgColor="var(--card-dark)">
        <Card />
        <Card />
        <Card />
        <Card />
      </Section>
    </div>
  );
}

export default Projects;
