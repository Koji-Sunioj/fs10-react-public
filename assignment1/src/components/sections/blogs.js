import identify from "../../functions/indentify";
import blogData from "../sectiondata/blogdata";
import SectionRow from "../layouts/sectionrow";
import DynamicHeader from "../layouts/dynamicheader";
import GridRow from "../layouts/gridrow";

const Blogs = () => {
  return (
    <SectionRow>
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
    </SectionRow>
  );
};

export default Blogs;
