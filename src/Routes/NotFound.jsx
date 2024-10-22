import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary">
      <h1 className="mb-6 text-2xl font-bold text-textPrimary">
        404 | Page Not Found
      </h1>
      <button
        className="rounded bg-tertiary px-4 py-2 font-bold text-textPrimary"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
