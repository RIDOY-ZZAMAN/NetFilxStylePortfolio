import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./GoBackButton.css";

const GoBackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // goes back to the previous page
  };

  return (
    <button onClick={handleGoBack} className="go-back-btn">
      <FaArrowLeft size={18} />
      Go Back
    </button>
  );
};

export default GoBackButton;
