import SectionColumn from "../layouts/sectioncolumn";

const Feedback = () => {
  return (
    <SectionColumn title={"Feedback"} headerType={"h2"}>
      <div className="grid-column__grid-item">
        <p>
          Got something on your mind? Well don't keep it to yourself stranger.
          Send it our way!
        </p>
      </div>
      <form className="grid-column__grid-item">
        <label htmlFor="the-name" id="name-label">
          Your name please:
        </label>
        <input type="text" id="the-name" name="name" />
        <label htmlFor="the-feedback" id="concern-label">
          Your concerns:
        </label>
        <textarea id="the-feedback" name="concerns" rows="10"></textarea>
        <button aria-labelledby="feedback name-label concern-label">
          Submit
        </button>
      </form>
    </SectionColumn>
  );
};

export default Feedback;
