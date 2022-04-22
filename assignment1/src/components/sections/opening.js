import Section from "../layouts/section";
import DynamicHeader from "../layouts/dynamicheader";
import Animation from "../animation";

const Opening = () => {
  return (
    <Section gridType={"grid-column"}>
      <DynamicHeader Tag={"h1"} text={"Welcome to the website"} id="opening" />
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
