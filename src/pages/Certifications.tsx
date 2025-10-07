import React, { useEffect, useState } from "react";
import "./Certifications.css";
import {
  FaExternalLinkAlt,
  FaUniversity,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { SiUdemy, SiCoursera, SiIeee } from "react-icons/si";
import { Certification } from "../types";
import { getCertifications } from "../queries/getCertifications";
const iconData: { [key: string]: JSX.Element } = {
  udemy: <SiUdemy />,
  coursera: <SiCoursera />,
  ieee: <SiIeee />,
  university: <FaUniversity />,
  qa: <FaChalkboardTeacher color="#0056b3" />,
};

const Certifications: React.FC = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    async function fetchCertifications() {
      const data = await getCertifications();
      console.log("Consoling from the Certifications", data);
      setCertifications(data);
    }

    fetchCertifications();
  }, []);

  if (certifications.length === 0) return <div>Loading...</div>;

  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a
            href={cert.verifyLink}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-card"
            style={{ "--delay": `${index * 0.2}s` } as React.CSSProperties}
          >
            <img src={cert.image} alt="" />
            <div className="certification-content">
              {/* <div className="certification-icon">
                {iconData[cert.iconName] || <FaUniversity />}
              </div> */}
              <h3>{cert.title}</h3>
              <p>{cert.organization}</p>
              {cert.date && (
                <span className="issued-date">Issued {cert.date}</span>
              )}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
