import styled from "styled-components";
import Card from "../UI/Card";
import Section from "../UI/Section";

function Projects() {
  return (
    <div>
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
