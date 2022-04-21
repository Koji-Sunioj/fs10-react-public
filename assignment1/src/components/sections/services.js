import identify from "../../functions/indentify";
import serviceData from "../sectiondata/servicedata";
import Section from "../layouts/section";
import GridRow from "../layouts/gridrow";
import DynamicHeader from "../layouts/dynamicheader";

const Services = () => {
  return (
    <Section gridType={"gridlike"}>
      <DynamicHeader Tag={"h2"} text={"Services"} />
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
