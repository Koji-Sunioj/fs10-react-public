import identify from "../../functions/indentify";
import blogData from "../sectiondata/blogdata";
import SectionRow from "../layouts/sectionrow";
import GridRow from "../layouts/gridrow";

const Blogs = () => {
  return (
    <SectionRow htmlID={"blogs"} title={"blogs"}>
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
