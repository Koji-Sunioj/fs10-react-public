import SectionColumn from "../layouts/sectioncolumn";
import DynamicHeader from "../layouts/dynamicheader";

const TechStack = () => {
  return (
    <SectionColumn>
      <DynamicHeader Tag={"h2"} text={"Tech Stack"} />
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
