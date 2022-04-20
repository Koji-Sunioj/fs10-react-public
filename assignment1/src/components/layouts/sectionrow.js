const SectionRow = ({ htmlID, title, children }) => {
  return (
    <section>
      <h2 id={htmlID}>{title.charAt(0).toUpperCase() + title.slice(1)}</h2>
      <div className="gridlike">{children}</div>
    </section>
  );
};

export default SectionRow;
