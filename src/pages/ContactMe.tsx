import React, { useEffect, useState } from "react";
import "./ContactMe.css";
import profilePic from "../images/Photo.jpg";
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from "react-icons/fa";
import { ContactMe as IContactMe } from "../types";
import { getContactMe } from "../queries/getContactMe";
import GoBackButton from "../components/GoBackButton";

const ContactMe: React.FC = () => {
  const [userData, setUserData] = useState<IContactMe>();

  useEffect(() => {
    async function fetchUserData() {
      const data = await getContactMe();
      console.log("consoling from Contact me", data);

      setUserData(data);
    }

    fetchUserData();
  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <>
      {userData.map((user, index) => (
        <div className="contact-container" key={index}>
          <GoBackButton></GoBackButton>
          <div className="linkedin-badge-custom">
            <img
              src={profilePic}
              alt="AKTARUZZAMAN RIDOY"
              className="badge-avatar"
            />
            <div className="badge-content">
              <h3 className="badge-name">{user?.name}</h3>
              <p className="badge-title">{user.title}</p>
              <p className="badge-description">{user.summary}</p>
              <p className="badge-company">{userData.companyUniversity}</p>
              <a
                href={user.linkedinlink}
                target="_blank"
                rel="noopener noreferrer"
                className="badge-link"
              >
                <FaLinkedin className="linkedin-icon" /> View Profile
              </a>
            </div>
          </div>
          <div className="contact-header">
            <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
          </div>
          <div className="contact-details">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href={`mailto:${user.email}`} className="contact-link">
                {user.email}
              </a>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <a href={`tel:${user.phonenumber}`} className="contact-link">
                {user.phonenumber}
              </a>
            </div>
            <div className="contact-fun">
              <p>Or catch up over a coffee ☕</p>
              <FaCoffee className="coffee-icon" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactMe;
