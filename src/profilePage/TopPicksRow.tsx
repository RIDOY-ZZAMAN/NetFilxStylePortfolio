import React from "react";
import { useNavigate } from "react-router-dom";
import "./TopPicksRow.css";
import {
  FaPassport,
  FaCode,
  FaBriefcase,
  FaCertificate,
  FaHandsHelping,
  FaProjectDiagram,
  FaEnvelope,
  FaMusic,
  FaBook,
} from "react-icons/fa";

type ProfileType = "recruiter" | "developer" | "stalker" | "adventure";

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    {
      title: "Work Permit",
      imgSrc:
        "https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc",
      icon: <FaPassport />,
      route: "/work-permit",
    },
    {
      title: "Skills",
      imgSrc:
        "https://dxhub.calpoly.edu/wp-content/uploads/2021/10/LaborMarket-overview.png",
      icon: <FaCode />,
      route: "/skills",
    },
    {
      title: "Experience",
      imgSrc:
        "https://images.squarespace-cdn.com/content/v1/64959c1091617327d9ef78bf/1722939997912-J4EMLITGXCH2BDLEPLWR/Championing+Academic+Integrity+in+the+Age+of+Artificial+Intelligence+Warwick+Business+School%27s+Approach+%281%29.png",
      icon: <FaBriefcase />,
      route: "/work-experience",
    },
    {
      title: "Certifications",
      imgSrc:
        "data:image/png;base64,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",
      icon: <FaCertificate />,
      route: "/certifications",
    },
    {
      title: "Recommendations",
      imgSrc:
        "https://martech.org/wp-content/uploads/2017/10/ss-recommendation.jpg",
      icon: <FaHandsHelping />,
      route: "/recommendations",
    },
    {
      title: "Projects",
      imgSrc:
        "https://piedmontcc.edu/wp-content/uploads/2022/07/project-1024x439.png",
      icon: <FaProjectDiagram />,
      route: "/projects",
    },
    {
      title: "Contact Me",
      imgSrc:
        "https://t4.ftcdn.net/jpg/03/37/96/33/360_F_337963325_EJuPjWslX3vAFxJ59L3y1cm6IsSfo07s.jpg",
      icon: <FaEnvelope />,
      route: "/contact-me",
    },
  ],
  developer: [
    {
      title: "Skills",
      imgSrc:
        "https://dxhub.calpoly.edu/wp-content/uploads/2021/10/LaborMarket-overview.png",
      route: "/skills",
      icon: <FaCode />,
    },
    {
      title: "Projects",
      imgSrc: "https://picsum.photos/seed/development/250/200",
      route: "/projects",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Certifications",
      imgSrc: "https://picsum.photos/seed/badge/250/200",
      route: "/certifications",
      icon: <FaCertificate />,
    },
    {
      title: "Experience",
      imgSrc: "https://picsum.photos/seed/work/250/200",
      route: "/work-experience",
      icon: <FaBriefcase />,
    },
    {
      title: "Recommendations",
      imgSrc: "https://picsum.photos/seed/networking/250/200",
      route: "/recommendations",
      icon: <FaHandsHelping />,
    },
    {
      title: "Contact Me",
      imgSrc: "https://picsum.photos/seed/connect/250/200",
      route: "/contact-me",
      icon: <FaEnvelope />,
    },
  ],
  stalker: [
    {
      title: "Recommendations",
      imgSrc: "https://picsum.photos/seed/networking/250/200",
      route: "/recommendations",
      icon: <FaHandsHelping />,
    },
    {
      title: "Contact Me",
      imgSrc: "https://picsum.photos/seed/call/250/200",
      route: "/contact-me",
      icon: <FaEnvelope />,
    },
    {
      title: "Projects",
      imgSrc: "https://picsum.photos/seed/planning/250/200",
      route: "/projects",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Experience",
      imgSrc: "https://picsum.photos/seed/resume/250/200",
      route: "/work-experience",
      icon: <FaBriefcase />,
    },
    {
      title: "Certifications",
      imgSrc: "https://picsum.photos/seed/achievements/250/200",
      route: "/certifications",
      icon: <FaCertificate />,
    },
  ],
  adventure: [
    {
      title: "Music",
      imgSrc:
        "https://marketplace.canva.com/EAFvLSrAX9U/1/0/1600w/canva-music-desktop-wallpaper-qgZBY-Ll2Vc.jpg",
      route: "/music",
      icon: <FaMusic />,
    },
    {
      title: "Projects",
      imgSrc: "https://picsum.photos/seed/innovation/250/200",
      route: "/projects",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Reading",
      imgSrc: "https://picsum.photos/seed/books/250/200",
      route: "/reading",
      icon: <FaBook />,
    },
    {
      title: "Contact Me",
      imgSrc: "https://picsum.photos/seed/connect/250/200",
      route: "/contact-me",
      icon: <FaEnvelope />,
    },
    {
      title: "Certifications",
      imgSrc: "https://picsum.photos/seed/medal/250/200",
      route: "/certifications",
      icon: <FaCertificate />,
    },
  ],
};

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
        {topPicks.map((pick, index) => (
          <div
            key={index}
            className="pick-card"
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
