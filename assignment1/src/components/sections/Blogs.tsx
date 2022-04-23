import identify from "../../functions/indentify";
import blogData from "../sectiondata/blogdata";
import Section from "../layouts/Section";
import DynamicHeader from "../layouts/DynamicHeader";
import GridRow from "../layouts/GridRow";

const Blogs = () => {
  return (
    <Section gridType={"gridlike"}>
      <DynamicHeader Tag={"h2"} text={"Blogs"} />
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
