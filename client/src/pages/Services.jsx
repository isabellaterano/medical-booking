import { Link } from "react-router-dom";
import InstantConsultation from "../assets/images/instantconsultation.svg";
import BookingConsultation from "../assets/images/calendar.svg";
import SelfCheckup from "../assets/images/self.svg";
import Blog from "../assets/images/blog.svg";

const Services = () => {
  return (
    <section className="min-h-dvh flex justify-center items-center flex-col">
      <div className="mb-8">
        <h1 className="text-4xl text-center mb-2">Services</h1>
        <p>Choose the service that best suits you.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card card-compact w-60 bg-base-100 shadow-xl">
          <Link to={"/instantconsultation"}>
            <figure className="image-full">
              <img src={InstantConsultation} alt="doctor and girl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="text-lg">Instant Consultation</h2>
            </div>
          </Link>
        </div>

        <div className="card card-compact w-60 bg-base-100 shadow-xl">
          <Link to={"/bookingconsultation"}>
            <figure className="image-full">
              <img src={BookingConsultation} alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="text-lg">Booking Appointment</h2>
            </div>
          </Link>
        </div>

        <div className="card card-compact w-60 bg-base-100 shadow-xl">
          <Link to={"/selfcheckup"}>
            <figure className="image-full">
              <img src={SelfCheckup} alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="text-lg">Self Checkup</h2>
            </div>
          </Link>
        </div>

        <div className="card card-compact w-60 bg-base-100 shadow-xl">
          <Link to={"/blog"}>
            <figure className="w-30">
              <img src={Blog} alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="text-lg ">Health Tips and Guidance</h2>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
