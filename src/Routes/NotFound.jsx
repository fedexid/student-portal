import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-primary flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-textPrimary mb-6 text-2xl font-bold">
        404 | Page Not Found
      </h1>
      <button
        className="bg-tertiary text-textPrimary rounded px-4 py-2 font-bold"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
