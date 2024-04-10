import Food from "../assets/images/food.jpg";
import Run from "../assets/images/run.jpg";
import Hug from "../assets/images/hug.jpg";

const Blog = () => {
  return (
    <section>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-12">
          <img
            src={Food}
            className="max-w-sm rounded-lg shadow-2xl w-72 lg:w-96"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Balanced diet, without restrictions, can improve mental and
              cognitive health!
            </h1>
            <p className="py-6">
              The finding comes from a study published this month in the journal
              Nature Mental Health and warns about the possible risks of
              restrictive diets.
            </p>
            <button className="btn btn-primary">More</button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 m-8 gap-4">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={Run} alt="woman running" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Do you feel pain in your shin when running? Find out how to
              relieve
            </h2>
            <p>
              'Splints' is characterized by inflammation in the shin region of
              the leg and is common among runners.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">More</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={Hug} alt="two people hugging" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Touch can reduce pain, depression and anxiety, say researchers
            </h2>
            <p>
              More consensual touch helps ease or buffer against mental and
              physical complaints, meta-analysis shows.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
