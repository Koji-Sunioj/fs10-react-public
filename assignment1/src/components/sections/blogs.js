import React from "react";

const Blogs = () => {
  return (
    <section>
      <h2 id="blogs">Blogs</h2>
      <div className="gridlike">
        <article>
          <div className="content">
            <h3>Dark Keyboards</h3>
            <img src="/assets/img-1.jpg" alt="dark mysterious keyboard" />
            <p id="dark-keyboards">
              Sometimes dark keyboards are cool. Here I explain why I think they
              are cool.
            </p>
          </div>
          <div className="redirect">
            <button aria-labelledby="blogs dark-keyboards">Read More</button>
          </div>
        </article>
        <article>
          <div className="content">
            <h3>Random Code</h3>
            <img src="/assets/img-2.jpg" alt="random code" />
            <p id="random-code">
              There is a laptop with random code on a clean table, with some
              fake Ikea plant.{" "}
            </p>
          </div>
          <div className="redirect">
            <button aria-labelledby="blogs random-code">Read More</button>
          </div>
        </article>
        <article>
          <div className="content">
            <h3>Writing Utensils</h3>
            <img src="/assets/img-3.jpg" alt="writing utensils" />
            <p id="writing-utensils">
              A photo of some writing utensils, notebook and a laptop.
            </p>
          </div>
          <div className="redirect">
            <button aria-labelledby="blogs writing-utensils">Read More</button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Blogs;
