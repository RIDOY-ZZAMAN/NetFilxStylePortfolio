import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./GoBackButton.css";

const GoBackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button className="go-back-btn" onClick={handleGoBack} type="button">
      <div className="icon-container">
        <FaArrowLeft size={18} />
      </div>
      <div className="spacer"></div>
      <span className="label">Go Back</span>
    </button>
  );
};

export default GoBackButton;
