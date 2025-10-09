import Card from "../UI/Card";
import Section from "../UI/Section";

function Tools() {
  return (
    <div id="tools">
      <Section
        mobileColumns={2}
        tabletColumns={4}
        desktopColumns={6}
        variant="dark"
      >
        <h2>Tools</h2>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Section>
    </div>
  );
}

export default Tools;
