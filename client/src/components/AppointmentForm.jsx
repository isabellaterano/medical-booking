import { useState, useEffect } from "react";

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [instantConsult, setInstantConsult] = useState(false);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("name");
    const storedPhoneNumber = sessionStorage.getItem("phone");
    if (storedUsername) {
      setName(storedUsername);
    }
    if (storedPhoneNumber) {
      setPhoneNumber(storedPhoneNumber);
    }
  }, []);

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, phoneNumber, selectedDate, selectedSlot, instantConsult });
    setName("");
    setPhoneNumber("");
    setSelectedSlot(null);
    setSelectedDate(null);
  };

  return (
    <form
      name="AppointmentForm"
      onSubmit={handleFormSubmit}
      className="form-control gap-1"
    >
      <div className="input input-bordered flex items-center gap-2">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="grow"
          required
        />
      </div>
      <div className="input input-bordered flex items-center gap-2">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div className="input input-bordered flex items-center gap-2">
        <input
          type="checkbox"
          id="consultInstantCheck"
          defaultChecked
          className="checkbox checkbox-secondary"
          checked={instantConsult}
          onChange={(e) => setInstantConsult(e.target.checked)}
        />
        <span className="checkLabel">Consult Instantly</span>
      </div>
      {instantConsult === false && (
        <div id="booking">
          <div className="input input-bordered flex items-center gap-2 mb-1">
            <label htmlFor="appointmentDate">Date of Appointment:</label>
            <input
              type="date"
              id="appointmentDate"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </div>
          <div className="input input-bordered flex items-center gap-2">
            <label htmlFor="timeSlot">Book Time Slot:</label>
            <select
              id="timeSlot"
              name="timeSlot"
              type="timeSlot"
              value={selectedSlot}
              onChange={(e) => setSelectedSlot(e.target.value)}
              required
            >
              <option value="" disabled>
                Select a time slot
              </option>
              <option value="9am">9 am</option>
              <option value="10am">10 am</option>
              <option value="11am">11 am</option>
              <option value="2pm">2 pm</option>
              <option value="3pm">3 pm</option>
              <option value="4pm">4 pm</option>
            </select>
          </div>
        </div>
      )}
      <button type="submit" className="btn btn-primary">
        Book Now
      </button>
    </form>
  );
};

export default AppointmentForm;
