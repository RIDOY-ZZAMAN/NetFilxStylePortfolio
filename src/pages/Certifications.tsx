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
import GoBackButton from "../components/GoBackButton";

const iconData: { [key: string]: JSX.Element } = {
  udemy: <SiUdemy />,
  coursera: <SiCoursera />,
  ieee: <SiIeee />,
  university: <FaUniversity />,
  qa: <FaChalkboardTeacher color="#0056b3" />,
};

// Simple Image Component with Loader
const ImageWithLoader: React.FC<{ src: string; alt: string }> = ({
  src,
  alt,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsLoaded(true);
    setHasError(true);
  };

  return (
    <div className="image-container">
      {/* Loader - shows until image is fully loaded */}
      {!isLoaded && (
        <div className="image-loading">
          <div className="loading-spinner"></div>
          <span className="loading-text">Loading...</span>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="image-error">
          <div className="error-icon">⚠️</div>
          <span>Image failed to load</span>
        </div>
      )}

      {/* Actual Image - hidden until loaded */}
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          display: isLoaded && !hasError ? "block" : "none",
        }}
      />
    </div>
  );
};

const Certifications: React.FC = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCertifications() {
      try {
        const data = await getCertifications();
        console.log("Consoling from the Certifications", data);
        setCertifications(data);
      } catch (error) {
        console.error("Error fetching certifications:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCertifications();
  }, []);

  if (isLoading) {
    return (
      <div className="certifications-container">
        <div className="loading-state">
          <div className="loading-spinner large"></div>
          <p>Loading certifications...</p>
        </div>
      </div>
    );
  }

  if (certifications.length === 0) {
    return (
      <div className="certifications-container">
        <div className="no-certifications">
          <p>No certifications found.</p>
        </div>
      </div>
    );
  }

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
            {cert.image ? (
              <ImageWithLoader src={cert.image} alt={cert.title} />
            ) : (
              <div className="no-image-placeholder">
                <div className="placeholder-icon">
                  {iconData[cert.iconName] || <FaUniversity />}
                </div>
                <span>No Image</span>
              </div>
            )}
            <div className="certification-content">
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
      <div
        style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}
      >
        <GoBackButton />
      </div>
    </div>
  );
};

export default Certifications;
