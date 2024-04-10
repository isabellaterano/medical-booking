import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FindDoctorSearchIC from "../components/FindDoctorSearchIC";
import DoctorCardIC from "../components/DoctorCardIC";

const InstantConsultation = () => {
  const [searchParams] = useSearchParams();
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    getDoctorsDetails();
  }, [searchParams]);

  const getDoctorsDetails = () => {
    fetch("https://api.npoint.io/9a5543d36f1460da2f63")
      .then((res) => res.json())
      .then((data) => {
        if (searchParams.get("speciality")) {
          // window.reload()
          const filtered = data.filter(
            (doctor) =>
              doctor.speciality.toLowerCase() ===
              searchParams.get("speciality").toLowerCase()
          );

          setFilteredDoctors(filtered);

          setIsSearched(true);
        } else {
          setFilteredDoctors([]);
          setIsSearched(false);
        }
        setDoctors(data);
      })
      .catch((err) => console.log(err));
  };

  const handleSearch = (searchText) => {
    if (searchText === "") {
      setFilteredDoctors([]);
      setIsSearched(false);
    } else {
      const filtered = doctors.filter((doctor) =>
        doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
      );

      setFilteredDoctors(filtered);
      setIsSearched(true);
    }
  };

  return (
    <section className="min-h-dvh">
      <div>
        <div>
          <FindDoctorSearchIC onSearch={handleSearch} />
        </div>
        <div>
          {isSearched && (
            <div>
              <div className="text-center font-bold mb-8">
                <h2 className="text-xl">
                  {filteredDoctors.length} doctors are available{" "}
                  {searchParams.get("location")}
                </h2>
                <p>
                  Book appointments with minimum wait-time & verified doctor
                  details
                </p>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mb-8">
                {filteredDoctors.length > 0 ? (
                  filteredDoctors.map((doctor) => (
                    <div
                      key={doctor.name}
                      className="flex justify-center items-center"
                    >
                      <DoctorCardIC {...doctor} />
                    </div>
                  ))
                ) : (
                  <p>No doctors found.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InstantConsultation;
