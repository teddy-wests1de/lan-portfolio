import Section from "../UI/Section";

function About() {
  return (
    <div id="about">
      <Section bgColor="var(--card-dark)">
        <h2>About Me</h2>
        <p>
          I’m a dedicated web developer with a passion for building clean,
          responsive, and user-friendly digital experiences. I specialize in
          modern web technologies like React, JavaScript, and Tailwind CSS,
          creating interfaces that are both visually engaging and highly
          functional. I enjoy turning complex problems into simple, elegant
          solutions, and I take pride in writing code that is maintainable and
          scalable. My approach combines technical precision with an eye for
          design.
        </p>
        <p>
          I focus on accessibility, performance, and usability, ensuring every
          project I work on delivers a seamless experience for users. Whether
          it’s a single-page application, an interactive portfolio, or a small
          business website, I aim to balance functionality with aesthetics.
          Beyond coding, I’m constantly exploring new tools and frameworks to
          improve my skills and stay current with web development trends. I’m
          always open to collaborating on meaningful projects and love
          connecting with others who share a passion for building beautiful,
          functional digital experiences.
        </p>
      </Section>
    </div>
  );
}

export default About;
