import identify from "../../functions/indentify";
import blogData from "../sectiondata/blogdata";
import Section from "../layouts/section";
import DynamicHeader from "../layouts/dynamicheader";
import GridRow from "../layouts/gridrow";

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
