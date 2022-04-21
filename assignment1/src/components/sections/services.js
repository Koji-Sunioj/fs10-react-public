import identify from "../../functions/indentify";
import serviceData from "../sectiondata/servicedata";
import SectionRow from "../layouts/sectionrow";
import GridRow from "../layouts/gridrow";
import DynamicHeader from "../layouts/dynamicheader";

const Services = () => {
  return (
    <SectionRow>
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
    </SectionRow>
  );
};

export default Services;
