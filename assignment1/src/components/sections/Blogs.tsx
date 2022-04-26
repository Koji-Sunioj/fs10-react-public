import identify from "../../functions/indentify";
import HeaderProp from "../types/HeaderProp";
import blogData from "../sectiondata/blogdata";
import Section from "../layouts/Section";
import GridRow from "../layouts/GridRow";

const Blogs = () => {
  const header: HeaderProp = {
    Tag: "h2",
    text: "Blogs",
  };

  return (
    <Section gridType={"gridlike"} header={header}>
      {blogData.map((blog) => {
        const htmlID = identify(blog.header);
        return (
          <GridRow
            parentAria={"blogs"}
            htmlID={htmlID}
            title={blog.header}
            text={blog.text}
            key={htmlID}
            image={blog.image}
          />
        );
      })}
    </Section>
  );
};

export default Blogs;
