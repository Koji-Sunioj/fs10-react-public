import React from "react";

const Services = () => {
  return (
    <section>
      <h2 id="services-header">Services</h2>
      <div className="gridlike">
        <article>
          <div className="content">
            <h3>Cool things</h3>
            <p id="cool-services">
              Sometimes we do cool things. If you like cool things, click on
              "Read More".{" "}
            </p>
          </div>
          <div className="redirect">
            <button aria-labelledby="services-header cool-services">
              Read More
            </button>
          </div>
        </article>
        <article>
          <div className="content">
            <h3>Awesome things</h3>
            <p id="awesome-services">
              Awesome things are our specialty. If you like awesome things,
              click on "Read More".
            </p>
          </div>
          <div className="redirect">
            <button aria-labelledby="services-header awesome-services">
              Read More
            </button>
          </div>
        </article>
        <article>
          <div className="content">
            <h3>Loco things</h3>
            <p id="loco-services">
              We also get loco too. Click "Read More" below if you also wanna
              get loco!
            </p>
          </div>
          <div className="redirect">
            <button aria-labelledby="services-header loco-services">
              Read More
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
