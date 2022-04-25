import Section from "../layouts/Section";
import Animation from "../Animation";
import headerProp from "../../functions/headerprop";

const Opening = () => {
  const header:headerProp = {
    Tag: "h1",
    text: "Welcome to the website",
  }
  return (
    <Section gridType={"grid-column"} header={header}>
      <div className="grid-column__grid-item opening" id="animation">
        <p className="opening__text-element">
          Stay for awhile. You might like it.
        </p>
        <Animation />
      </div>
      <div id="pointer">
        <div id="arrow"></div>
      </div>
    </Section>
  );
};

export default Opening;
