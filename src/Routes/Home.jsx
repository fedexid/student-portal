import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex grow flex-col items-center justify-center bg-[#2a2b41]">
        <h1 className="mb-4 text-4xl font-bold text-textPrimary lg:mb-8 lg:text-6xl">
          Student Portal
        </h1>
        <Link
          to="/student"
          className="w-max rounded-xl bg-secondary px-6 py-3 text-lg font-bold text-textPrimary lg:px-10 lg:py-4 lg:text-2xl"
        >
          All Student
        </Link>
      </div>
    </div>
  );
};

export default Home;
