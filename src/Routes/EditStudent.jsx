import MainLayout from "../components/MainLayout";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [programStudy, setProgramStudy] = useState("");

  const { id } = useParams();

  let navigate = useNavigate();

  const fetchEdit = async () => {
    try {
      const response = await fetch(`http://localhost:8000/student/${id}`);
      if (!response.ok) {
        throw new Error("Error Occured");
      }

      const data = await response.json();
      setLoading(false);
      setName(data.fullname);
      setProfilePicture(data.profilePicture);
      setAddress(data.address);
      setPhoneNumber(data.phoneNumber);
      setBirthDate(data.birthDate);
      setGender(data.gender);
      setProgramStudy(data.programStudy);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchEdit();
  }, [id]);

  const handleEdit = async (e) => {
    e.preventDefault();
    let faculty = "";
    if (
      programStudy === "Ekonomi" ||
      programStudy === "Manajemen" ||
      programStudy === "Akuntansi"
    ) {
      faculty = "Fakultas Ekonomi";
    } else if (
      programStudy === "Administrasi Publik" ||
      programStudy === "Administrasi Bisnis" ||
      programStudy === "Hubungan Internasional"
    ) {
      faculty = "Fakultas Ilmu Sosial dan Politik";
    } else if (
      programStudy === "Teknik Sipil" ||
      programStudy === "Arsitektur"
    ) {
      faculty = "Fakultas Teknik";
    } else if (
      programStudy === "Matematika" ||
      programStudy === "Fisika" ||
      programStudy === "Informatika"
    ) {
      faculty = "Fakultas Teknologi Informasi dan Sains";
    }
    try {
      const response = await fetch(`http://localhost:8000/student/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: name,
          profilePicture,
          address,
          phoneNumber,
          birthDate,
          gender,
          programStudy,
          faculty,
        }),
      });
      if (!response.ok) {
        throw new Error("Error Occured");
      }
      await response.json();
      setLoading(false);
      navigate("/student");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <MainLayout>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error...</div>
      ) : (
        <div>
          <img
            src={profilePicture}
            alt={`${name} picture`}
            className="mx-auto my-4 rounded-full shadow-lg shadow-slate-400"
          />

          <form
            className="text-primary mx-auto mt-2 w-10/12 max-w-md space-y-4 p-2 lg:my-2 lg:max-w-lg"
            onSubmit={handleEdit}
          >
            <div>
              <label
                htmlFor="full name"
                className="text-textPrimary mb-1 block font-bold"
              >
                Full Name :
              </label>
              <input
                type="text"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded outline-none focus:ring focus:ring-blue-600 lg:p-2"
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="text-textPrimary mb-1 block font-bold"
              >
                Address:
              </label>
              <input
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full rounded outline-none focus:ring focus:ring-blue-600 lg:p-2"
              />
            </div>

            <div>
              <label
                htmlFor="phone number"
                className="text-textPrimary mb-1 block font-bold"
              >
                Phone Number:
              </label>
              <input
                type="text"
                required
                pattern="\+62\d{9,11}"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full rounded outline-none focus:ring focus:ring-blue-600 lg:p-2"
              />
            </div>
            <div className="space-y-4 lg:flex lg:justify-between lg:space-y-0">
              <div className="lg:mr-4 lg:grow">
                <label
                  htmlFor="birth date"
                  className="text-textPrimary mb-1 block font-bold"
                >
                  Birth Date:
                </label>
                <input
                  type="date"
                  name="birthDate"
                  id="birthDate"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="text-primary w-full rounded outline-none focus:ring focus:ring-blue-600 lg:h-10 lg:p-2"
                />
              </div>
              <div className="lg:grow">
                <label
                  htmlFor="gender"
                  className="text-textPrimary mb-1 block font-bold"
                >
                  Gender :
                </label>
                <select
                  name="gender"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                  className="text-primary w-full rounded outline-none focus:ring focus:ring-blue-600 lg:h-10 lg:p-2"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Rather Not Say">Rather not say</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="program study"
                className="text-textPrimary mb-1 block font-bold"
              >
                Program Study :
              </label>
              <select
                name="programStudy"
                id="programStudy"
                value={programStudy}
                onChange={(e) => setProgramStudy(e.target.value)}
                required
                className="text-primary w-full rounded lg:p-2"
              >
                <option value="Ekonomi">Ekonomi</option>
                <option value="Manajemen">Manajemen</option>
                <option value="Akuntansi">Akuntansi</option>
                <option value="Administrasi Publik">Administrasi Publik</option>
                <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                <option value="Hubungan Internasional">
                  Hubungan Internasional
                </option>
                <option value="Teknik Sipil">Teknik Sipil</option>
                <option value="Arsitektur">Arsitektur</option>
                <option value="Matematika">Matematika</option>
                <option value="Fisika">Fisika</option>
                <option value="Informatika">Informatika</option>
              </select>
            </div>
            <button
              type="submit"
              className="text-textPrimary bg-tertiary w-full rounded-lg px-4 py-2 font-bold lg:py-4"
            >
              Edit Student
            </button>
          </form>
        </div>
      )}
    </MainLayout>
  );
};

export default EditStudent;
