import { useState } from "react";
import AppointmentFormIC from "./AppointmentFormIC";
import { v4 as uuidv4 } from "uuid";
import { IoMdClose } from "react-icons/io";

const DoctorCardIC = ({
  name,
  speciality,
  experience,
  ratings,
  profilePic,
}) => {
  const [appointments, setAppointments] = useState([]);

  const handleCancel = (appointmentId) => {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== appointmentId
    );
    setAppointments(updatedAppointments);
  };

  const handleFormSubmit = (appointmentData) => {
    const newAppointment = {
      id: uuidv4(),
      ...appointmentData,
    };
    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);
  };

  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            fill="currentColor"
            className="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </figure>
        <div className="card-body  items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{speciality}</p>
          <p>{experience} years experience</p>
          <p>Ratings: {ratings}</p>
          <div className="card-actions">
            <button
              className={`btn btn-primary ${
                appointments.length > 0 ? "btn btn-error" : ""
              }`}
              onClick={() =>
                appointments.length > 0
                  ? handleCancel(appointments[0].id)
                  : null
              }
            >
              {appointments.length > 0 ? (
                <div>Cancel Appointment</div>
              ) : (
                <div
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className=""
                >
                  Book Appointment
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <IoMdClose />
            </button>
          </form>
          <div className="flex justify-center items-center flex-col my-8">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </div>
            <div className="text-center">
              <p className="font-semibold ">{name}</p>
              <p>{speciality}</p>
              <p>{experience} years experience</p>
              <p>Ratings: {ratings}</p>
            </div>
          </div>

          {appointments.length > 0 ? (
            <>
              <h3 className="text-center font-bold">Appointment Booked!</h3>
              {appointments.map((appointment) => (
                <div
                  className="flex justify-center items-center flex-col gap-1"
                  key={appointment.id}
                >
                  <p>Name: {appointment.name}</p>
                  <p>Phone Number: {appointment.phoneNumber}</p>
                  <button
                    type="submit"
                    onClick={() => handleCancel(appointment.id)}
                    className="btn btn-error"
                  >
                    Cancel Appointment
                  </button>
                </div>
              ))}
            </>
          ) : (
            <AppointmentFormIC
              doctorName={name}
              doctorSpeciality={speciality}
              onSubmit={handleFormSubmit}
            />
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default DoctorCardIC;
