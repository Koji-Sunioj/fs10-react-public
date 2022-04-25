import Section from "../layouts/Section";
import headerProp from "../../functions/headerprop";

const TechStack = () => {

  const header:headerProp = {
    Tag: "h2",
    text: "Tech Stack",
  }

  return (
    <Section gridType={"grid-column"} header={header}>
      <div className="grid-column__grid-item">
        <p>This is the tech stack we use.</p>
        <ul>
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>React.js</li>
          <li>Node.js</li>
        </ul>
        <p>We are #agile #iterators.</p>
      </div>
    </Section>
  );
};

export default TechStack;
