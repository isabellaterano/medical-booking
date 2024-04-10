import { Link } from "react-router-dom";
import doctor from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section className="hero min-h-screen px-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={doctor} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="mx-8">
          <h1 className="text-5xl font-bold">
            Your Health <br /> Our Responsibility
          </h1>
          <p className="py-8 pr-12">
            Our platform connects you with experienced healthcare professionals,
            providing personalized consultations. Whether you seek advice on a
            specific health concern or require ongoing care, our team is here to
            support you every step of the way. Book your appointment now to take
            control of your health journey
          </p>
          <Link to={"/appointments"}>
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
