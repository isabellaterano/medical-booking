import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import GiveReviews from "../components/GiveReviews";

const Reviews = ({ children }) => {
  const ref = useRef();
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState([]);
  const [isShowReviewForm, setIsShowReviewForm] = useState(false);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("email");
    let storedDoctorData = JSON.parse(localStorage.getItem("doctorData"));

    if (storedDoctorData) {
      let i = 1;
      storedDoctorData.forEach((element) => {
        element.id = i++;
      });

      setDoctorData(storedDoctorData);
    }

    if (storedUsername) {
      setUsername(storedUsername);
    }

    if (storedUsername && storedDoctorData) {
      setIsShowReviewForm(true);
    }
  }, []);

  const handleFormSubmit = (submittedMessage) => {
    const updatedDoctorData = doctorData.map((doctor) => {
      if (doctor.id === submittedMessage.doctor.id) {
        doctor.review = submittedMessage.review;
        doctor.rating = submittedMessage.rating;
      }
      return doctor;
    });
    setDoctorData(updatedDoctorData);
  };

  return (
    <section className="min-h-dvh mx-12">
      <div className="text-center m-8">
        <h1 className="font-bold text-3xl">Reviews</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Doctor Name</th>
              <th>Doctor Speciality</th>
              <th>Provide Feedback</th>
              <th>Review Given</th>
            </tr>
          </thead>
          <tbody>
            {doctorData.map((doctor) => (
              <tr key={doctor?.id}>
                <td>{doctor?.id}</td>
                <td>{doctor?.name}</td>
                <td>{doctor?.speciality}</td>
                <td>
                  <div ref={ref}>
                    <button
                      disabled={doctor?.review}
                      className="btn btn-secondary"
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                    >
                      {doctor?.review ? "Reviewed" : "Click Here"}
                    </button>
                  </div>

                  <div>
                    <GiveReviews doctor={doctor} onSubmit={handleFormSubmit} />
                  </div>
                </td>
                <td>{doctor?.review}</td>
              </tr>
            ))}
            <tr>
              <td>3</td>
              <td>Dr. Paula Boe</td>
              <td>Dermatology</td>
              <td>
                <button disabled className="btn btn-secondary">
                  Reviewed
                </button>
              </td>
              <td>Great consultation</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Reviews;
