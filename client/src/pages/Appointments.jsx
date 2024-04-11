import { useEffect, useState } from "react";

const Appointments = () => {
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState([]);
  const [hasAppointments, setHasAppointments] = useState(false);

  useEffect(() => {
    try {
      const storedUsername = sessionStorage.getItem("email");
      const storedDoctorData = JSON.parse(localStorage.getItem("doctorData"));

      if (storedUsername || storedDoctorData) {
        // If both username and doctorData are available and doctorData is not empty
        setUsername(storedUsername);
        setDoctorData(storedDoctorData);
        setHasAppointments(true);
      } else {
        // If there are no appointments or username is missing
        setHasAppointments(false);
        console.log("No appointments available or username missing.");
      }
    } catch (error) {
      console.error("Error retrieving appointment data:", error);
      // Handle the error gracefully, e.g., by setting default values or showing an error message.
      setHasAppointments(false);
    }
  }, []);

  return (
    <section className="min-h-dvh">
      <div className="flex justify-center items-center flex-col ">
        <div className="font-bold text-center text-3xl m-8">
          <h1>Appointment Details</h1>
        </div>
        {hasAppointments ? (
          <div className="grid lg:grid-cols-2 gap-10">
            {doctorData.map((doctor, index) => {
              const storedAppointmentData = JSON.parse(
                localStorage.getItem(doctor?.name)
              );
              return (
                <div key={index} className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <ul>
                      <li>
                        <span className="font-bold">Doctor:</span>{" "}
                        {doctor?.name}
                      </li>
                      <li>
                        <span className="font-bold">Speciality:</span>{" "}
                        {doctor?.speciality}
                      </li>
                      <li>
                        <span className="font-bold">Name:</span>{" "}
                        {storedAppointmentData?.name}
                      </li>
                      <li>
                        <span className="font-bold">Phone Number:</span>{" "}
                        {storedAppointmentData?.phoneNumber}
                      </li>
                      <li>
                        <span className="font-bold">Date of Appointment:</span>
                        {storedAppointmentData?.selectedDate}
                      </li>
                      <li>
                        <span className="font-bold">Time Slot: </span>
                        {storedAppointmentData?.selectedSlot}
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="font-medium text-lg m-12">No appointments available.</p>
        )}
      </div>
    </section>
  );
};

export default Appointments;
