import { Link } from "react-router-dom";
import doctor from "../assets/images/doctor.svg";
import blogImage from "../assets/images/run.jpg";
import serviceImage from "../assets/images/medical1.svg";
import serviceImage2 from "../assets/images/medical2.svg";
import serviceImage3 from "../assets/images/medical3.svg";

const Home = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div className="hero bg-base-200 min-h-dvh">
        <div className="hero-content flex-col lg:flex-row-reverse gap-14 lg:gap-24">
          <img
            src={doctor}
            alt="Doctor"
            className="max-w-full rounded-lg w-72 lg:w-[30rem] object-cover"
          />
          <div>
            <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
              Your Health <br /> Our Responsibility
            </h1>
            <p className="py-6 text-lg text-gray-700">
              Our platform connects you with experienced healthcare
              professionals, providing personalized consultations. Whether you
              seek advice on a specific health concern or require ongoing care,
              our team is here to support you every step of the way. Book your
              appointment now to take control of your health journey.
            </p>
            <Link to={"/services"}>
              <button className="btn btn-primary px-6 py-3 text-lg">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-base-100">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-primary">Our Services</h2>
          <p className="text-lg text-gray-600 mt-4">
            We provide a range of healthcare services to meet your needs.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={serviceImage}
                alt="General Consultation"
                className="rounded-xl w-full h-40 object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-2xl font-semibold">General Consultation</h3>
              <p className="text-gray-600">
                Get professional advice from experienced doctors for your
                general health concerns.
              </p>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={serviceImage2}
                alt="Specialist Referral"
                className="rounded-xl w-full h-40 "
              />
            </figure>
            <div className="card-body">
              <h3 className="text-2xl font-semibold">Specialist Referral</h3>
              <p className="text-gray-600">
                Connect with specialists for specific medical conditions and
                receive expert care.
              </p>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={serviceImage3}
                alt="Preventive Care"
                className="rounded-xl w-full h-40"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-2xl font-semibold">Preventive Care</h3>
              <p className="text-gray-600">
                Stay proactive with regular check-ups and preventive health
                screenings.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="py-16 bg-base-200">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-44">
          <img
            src={blogImage}
            alt="Health Blog"
            className="w-full lg:w-[20rem] h-auto rounded-lg shadow-lg object-cover"
          />
          <div className="max-w-lg text-center lg:text-left">
            <h2 className="text-4xl font-bold text-primary">
              Stay Informed with Our Health Blog
            </h2>
            <p className="py-6 text-lg text-gray-600">
              Our health blog offers the latest insights, tips, and advice from
              our team of medical experts. Stay updated on health trends and
              learn how to live a healthier life.
            </p>
            <Link to={"/blog"}>
              <button className="btn btn-primary px-6 py-3 text-lg">
                Visit Our Blog
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-primary text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Ready to Take the Next Step?</h2>
          <p className="text-lg mt-4">
            Join thousands of others who have taken control of their health.
          </p>
          <Link to={"/signup"}>
            <button className="btn btn-secondary mt-8 px-6 py-3 text-lg">
              Sign Up Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
