import SectionColumn from "../layouts/sectioncolumn";

const TechStack = () => {
  return (
    <SectionColumn title={"Tech Stack"} headerType={"h2"}>
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
    </SectionColumn>
  );
};

export default TechStack;
