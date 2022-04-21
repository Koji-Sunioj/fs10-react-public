import PropTypes from "prop-types";

const GridRow = ({ parentAria, htmlID, title, text, image }) => (
  <article>
    <div className="content">
      <h3>{title}</h3>
      {image && <img src={image.src} alt={image.alt} />}
      <p id={htmlID}>{text}</p>
    </div>
    <div className="redirect">
      <button aria-labelledby={parentAria + " " + htmlID}>Read More</button>
    </div>
  </article>
);

GridRow.propTypes = {
  parentAria: PropTypes.string,
  htmlID: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.object,
};

export default GridRow;
