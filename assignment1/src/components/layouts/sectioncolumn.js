import identify from "../../functions/indentify";

const SectionColumn = ({ title, children, headerType }) => {
  const Header = ({ Tag, text, id }) => {
    return <Tag id={id}>{text}</Tag>;
  };

  return (
    <section>
      <Header Tag={headerType} text={title} id={identify(title)} />
      <div className="grid-column">{children}</div>
    </section>
  );
};

export default SectionColumn;
