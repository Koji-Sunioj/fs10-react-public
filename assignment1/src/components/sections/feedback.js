import React from "react";

const Feedback = () => {
  return (
    <section>
      <h2 id="feedback">Feedback</h2>
      <p>
        Got something on your mind? Well don't keep it to yourself stranger.
        Send it our way!
      </p>
      <div className="form">
        <form>
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
      </div>
    </section>
  );
};

export default Feedback;
