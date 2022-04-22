import Section from "../layouts/Section";
//import DynamicHeader from "../layouts/DynamicHeader";
import Animation from "../Animation";

const Opening = () => {
  /*<DynamicHeader Tag={"h1"} text={"Welcome to the website"} id="opening" />
      <div className="grid-column__grid-item opening" id="animation">
        <p className="opening__text-element">
          Stay for awhile. You might like it.
        </p>
        <Animation />
      </div>
      <div id="pointer">
        <div id="arrow"></div>
      </div> */

  return (
    <Section gridType={"grid-column"}>
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
