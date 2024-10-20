import { useState } from "react";
import Dropdown from "../assets/Dropdown.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  return (
    <nav className="bg-secondary w-full lg:py-2">
      <div className="mx-2 flex items-center justify-between py-2">
        <button onClick={handleShow} className="md:hidden">
          <img
            src={Dropdown}
            alt="dropdown"
            className="text-textPrimary h-10 w-10"
          />
        </button>

        <Link to="/" className="text-textPrimary text-lg font-bold lg:ml-2">
          Student Portal
        </Link>

        <div className="hidden gap-4 lg:mr-2 lg:flex">
          <Link to="/student" className="text-textPrimary text-lg font-bold">
            All Student
          </Link>
          <Link to="/add" className="text-textPrimary text-lg font-bold">
            Add Student
          </Link>
        </div>
      </div>

      {show && (
        <ul className="bg-secondary text-textPrimary flex flex-col items-center justify-center font-bold transition ease-in-out">
          <li className="border-tertiary w-full border-b-2 py-3 text-center">
            <Link to="/">Student Portal</Link>
          </li>
          <li className="border-tertiary w-full border-b-2 py-3 text-center">
            <Link to="/student">All Students</Link>
          </li>
          <li className="w-full border-b-0 py-3 text-center">
            <Link to="/add">Add Students</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
