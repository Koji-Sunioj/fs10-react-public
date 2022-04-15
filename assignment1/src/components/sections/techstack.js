import React from "react";

const TechStack = () => {
  return (
    <section>
      <h2 id="tech-stack">Tech Stack</h2>
      <div className="grid-column">
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
      </div>
    </section>
  );
};

export default TechStack;
