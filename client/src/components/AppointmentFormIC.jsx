import { useState } from "react";

const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, phoneNumber });
    setName("");
    setPhoneNumber("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="form-control gap-2">
      <div className="input input-bordered flex items-center gap-2">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="input input-bordered flex items-center gap-2">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          placeholder=""
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Book Now
      </button>
    </form>
  );
};

export default AppointmentFormIC;
