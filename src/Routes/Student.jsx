import { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import { useNavigate } from "react-router-dom";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState("All");

  let navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/student");
      const data = await response.json();
      setLoading(false);
      setStudents(data);
    } catch (err) {
      setError(err);
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8000/student/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const newData = students.filter((student) => student.id !== id);
      setStudents(newData);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const filteredStudents = students.filter(
    (student) => filter === "All" || student.faculty === filter,
  );

  const handleEdit = (id) => {
    navigate(`/student/${id}`);
  };

  return (
    <MainLayout>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error...</div>
      ) : (
        <div className="lg:flex lg:flex-col lg:items-center lg:justify-center">
          <div>
            <select
              name="Faculty Filter"
              aria-label="Select Faculty"
              id="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="my-2 w-full max-w-screen-md appearance-none rounded-lg bg-tertiary px-4 py-2 text-textPrimary lg:max-w-full"
            >
              <option value="All">All</option>
              <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
              <option value="Fakultas Ilmu Sosial dan Politik">
                Fakultas Ilmu Sosial dan Politik
              </option>
              <option value="Fakultas Teknik">Fakultas Teknik</option>
              <option value="Fakultas Teknologi Informasi dan Sains">
                Fakultas Teknologi Informasi dan Sains
              </option>
            </select>

            <table className="table-auto overflow-x-scroll bg-slate-900 text-textPrimary">
              <thead>
                <tr>
                  <th className="border border-slate-600 py-2 text-center">
                    No
                  </th>
                  <th className="border border-slate-600 py-2 text-center">
                    Full Name
                  </th>
                  <th className="border border-slate-600 py-2 text-center">
                    Faculty
                  </th>
                  <th className="border border-slate-600 py-2 text-center">
                    Program Study
                  </th>
                  <th className="border border-slate-600 py-2 text-center">
                    Option
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => {
                  return (
                    <tr key={student.id} className="odd:bg-slate-950">
                      <td className="border border-slate-600 text-center lg:px-2">
                        {student.id}
                      </td>
                      <td className="border border-slate-600 text-justify lg:px-2">
                        {student.fullname}
                      </td>
                      <td className="border border-slate-600 text-justify lg:px-2">
                        {student.faculty}
                      </td>
                      <td className="border border-slate-600 text-justify lg:px-2">
                        {student.programStudy}
                      </td>
                      <td className="border border-slate-600 text-justify lg:flex">
                        <button
                          className="w-full bg-blue-600 px-4 py-2 font-bold text-white"
                          onClick={() => handleEdit(student.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="w-full bg-red-500 px-4 py-2 font-bold text-white"
                          onClick={() => handleDelete(student.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Student;
