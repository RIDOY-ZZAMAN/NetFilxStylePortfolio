import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import blueImage from "../images/recruiter.JPG";
import greyImage from "../images/developer.jpg";
import redImage from "../images/stalker.png";
import yellowImage from "../images/adventurer.jpg";
import "./browse.css";

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      name: "recruiter",
      image: blueImage,
      backgroundGif:
        "https://media.licdn.com/dms/image/v2/C4E12AQEnW1GiPhnyuw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1590444667333?e=2147483647&v=beta&t=hwS4VOiE3WL34i3YBbOwu-17EUS4suzeItFfV0R4rMI", // Dark storm clouds
    },
    {
      name: "developer",
      image: greyImage,
      backgroundGif:
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif", // Flickering neon lights
    },
    {
      name: "stalker",
      image: redImage,
      backgroundGif:
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc28yMjMyZmJ6eWtxbmNwdDV6cXk4dWZmcjFhZms2cXBjN2h5ZDJjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjZXUBUr89CkiWLPjL/giphy.gif", // Dark, abstract digital lights
    },
    {
      name: "adventurer",
      image: yellowImage,
      backgroundGif:
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif", // Dark ocean waves at night
    },
  ];

  const handleProfileClick = (profile: {
    name: string;
    image: string;
    backgroundGif: string;
  }) => {
    navigate(`/profile/${profile.name}`, {
      state: {
        profileImage: profile.image,
        backgroundGif: profile.backgroundGif,
      },
    });
  };

  return (
    <div className="browse-container">
      <p className="who-is-watching">Who's Watching?</p>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
