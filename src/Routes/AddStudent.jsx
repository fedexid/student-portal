import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";

/**
 * AddStudent Component
 *
 * This component renders a form that allows users to add a student to the system.
 *
 * @component
 * @returns {JSX.Element} The rendered form for adding a new student.
 */

const AddStudent = () => {
  // This is a state to store the form input values
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("Male");
  const [programStudy, setProgramStudy] = useState("Ekonomi");

  // Navigate function to redirect user to other page after form submitted successfully
  let navigate = useNavigate();

  /**
   *
   * This is a function to handle the form when it submitted
   * It constructs the student object based on the form
   * inputs, determines the faculty based on the selected program of study, and sends the data to the server
   * via a POST request.
   * @param {*} e
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // This is a logic to determine the faculty based on the chosen Program Study
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
      const response = await fetch("http://localhost:8000/student", {
        method: "POST",
        headers: {
          "content-type": "application/json",
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

      // This setState is used to clear the form after the form submitted and redirect the user to the student page
      setName("");
      setAddress("");
      setBirthDate("");
      setGender("Male");
      setPhoneNumber("");
      setProfilePicture("");
      setProgramStudy("Ekonomi");
      navigate("/student");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout>
      <form
        className="mx-auto mt-2 w-10/12 max-w-md space-y-4 p-2 lg:my-2 lg:max-w-lg"
        onSubmit={handleSubmit}
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
            placeholder="Enter Your Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded outline-none focus:ring focus:ring-blue-600 lg:p-2"
          />
        </div>

        <div>
          <label
            htmlFor="profile picture"
            className="text-textPrimary mb-1 block font-bold"
          >
            Profile Picture :
          </label>
          <input
            type="url"
            placeholder="Enter the URL for your picture"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
            className="w-full rounded outline-none focus:ring focus:ring-blue-600 lg:p-2"
            required
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
            placeholder="Your Address"
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
            placeholder="+62 and followed by 9 to 11 digits"
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
              className="text-primary w-full rounded outline-none focus:ring focus:ring-blue-600 lg:h-10 lg:p-2"
              required
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
            className="text-primary w-full rounded lg:p-2"
            required
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
          className="bg-secondary text-textPrimary w-full rounded-lg px-4 py-2 font-bold lg:py-4"
        >
          Add Student
        </button>
      </form>
    </MainLayout>
  );
};

export default AddStudent;
