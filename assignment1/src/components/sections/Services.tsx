import identify from "../../functions/indentify";
import serviceData from "../sectiondata/servicedata";
import Section from "../layouts/Section";
import GridRow from "../layouts/GridRow";
import headerProp from "../../functions/headerprop";

const Services = () => {

  const header:headerProp = {
    Tag: "h2",
    text: "Services",
  }

  return (
    <Section gridType={"gridlike"} header={header}>
      {serviceData.map((service) => {
        const htmlID = identify(service.header);
        return (
          <GridRow
            parentAria={"services-header"}
            htmlID={htmlID}
            title={service.header}
            text={service.text}
            key={htmlID}
          />
        );
      })}
    </Section>
  );
};

export default Services;
