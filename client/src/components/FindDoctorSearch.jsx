import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../assets/images/search.svg";
import { IoSearchOutline } from "react-icons/io5";

const initSpeciality = [
  "Dentist",
  "Gynecologist/obstetrician",
  "General Physician",
  "Dermatologist",
  "Ear-nose-throat (ent) Specialist",
  "Homeopath",
  "Ayurveda",
];

const FindDoctorSearch = () => {
  const [doctorResultHidden, setDoctorResultHidden] = useState(true);
  const [searchDoctor, setSearchDoctor] = useState("");
  const [specialities, setSpecialities] = useState(initSpeciality);
  const navigate = useNavigate();

  const handleDoctorSelect = (speciality) => {
    setSearchDoctor(speciality);
    setDoctorResultHidden(true);
    navigate(`/bookingconsultation?speciality=${speciality}`);
    window.location.reload();
  };

  return (
    <div className="flex justify-center items-center flex-col my-8 mx-4">
      <div>
        <div className="flex items-center flex-col gap-8">
          <h1 className="font-bold text-3xl text-center">
            Find a doctor at your own ease
          </h1>
          <div className="w-60">
            <img src={Search} alt="search" />
          </div>
        </div>

        <div className="">
          <form>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow w-full"
                placeholder="Search doctors, clinics, hospitals, etc."
                onFocus={() => setDoctorResultHidden(false)}
                onBlur={() => setDoctorResultHidden(true)}
                value={searchDoctor}
                onChange={(e) => setSearchDoctor(e.target.value)}
              />
              <IoSearchOutline className="w-4 h-4 opacity-70" />
            </label>
          </form>

          <div hidden={doctorResultHidden} className="p-4 cursor-pointer">
            {specialities.map((speciality) => (
              <div
                className="flex justify-between items-center gap-6 p-2"
                key={speciality}
                onMouseDown={() => handleDoctorSelect(speciality)}
              >
                <span>
                  <IoSearchOutline />
                </span>
                <span>{speciality}</span>
                <span>SPECIALITY</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDoctorSearch;
