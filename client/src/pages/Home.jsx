import { Link } from "react-router-dom";
import doctor from "../assets/images/hero.jpg";

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-11">
        <img
          src={doctor}
          className="max-w-sm rounded-lg shadow-2xl w-60 lg:w-96"
        />
        <div>
          <h1 className="text-5xl font-bold ">
            Your Health <br /> Our Responsibility
          </h1>
          <p className="py-6">
            Our platform connects you with experienced healthcare professionals,
            providing personalized consultations. Whether you seek advice on a
            specific health concern or require ongoing care, our team is here to
            support you every step of the way. Book your appointment now to take
            control of your health journey
          </p>
          <Link to={"/services"}>
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
