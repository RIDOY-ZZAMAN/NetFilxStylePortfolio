import React, { useEffect, useState } from "react";
import "./WorkPermit.css";
import GoBackButton from "../components/GoBackButton";
const WorkPermit: React.FC = () => {
  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🎓 Work Permit</h2>
        <p className="work-permit-summary">
          I'm currently on a Residence Permit Visa for study purpose, I may
          required some additional papers from the company which will allows me
          to work in the China! and which will also allow me the opportunity to
          build valuable experience and grow my career here. 🌟
        </p>
        <p className="additional-info">
          For any additional queries please reach me out on 18617821172575
        </p>
      </div>
      <br />
      <GoBackButton></GoBackButton>
    </div>
  );
};

export default WorkPermit;
