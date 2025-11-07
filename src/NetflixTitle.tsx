import React, { useEffect, useState } from "react";
import "./NetflixTitle.css";
import netflixSound from "./netflix-sound.mp3";
import { useNavigate } from "react-router-dom";
import logoImage from "../src/images/logo.png";

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handlePlaySound = () => {
    const audio = new Audio(netflixSound);
    audio.play().catch((error) => console.error("Audio play error:", error));
    setIsClicked(true); // Starts animation after clicking
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate("/browse");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handlePlaySound}>
      <img
        src={logoImage}
        alt="Custom Logo"
        className={`netflix-logo ${isClicked ? "animate" : ""}`}
      />{" "}
      <br />
      {!isClicked && (
        <div className="click-hint">
          <span>
            👆 Would you mind clicking on my name please?{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="28"
              height="28"
              className="blush-icon"
            >
              <circle cx="32" cy="32" r="30" fill="#ffcccb" />
              <circle cx="22" cy="28" r="5" fill="#ff7b7b" />
              <circle cx="42" cy="28" r="5" fill="#ff7b7b" />
              <path
                d="M22 40c3 3 8 5 10 5s7-2 10-5"
                stroke="#d62828"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      )}
    </div>
  );
};

export default NetflixTitle;
