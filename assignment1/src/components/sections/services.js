import identify from "../../functions/indentify";
import serviceData from "../sectiondata/servicedata";
import SectionRow from "../layouts/sectionrow";
import GridRow from "../layouts/gridrow";

const Services = () => {
  return (
    <SectionRow htmlID={"services-header"} title={"services"}>
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
