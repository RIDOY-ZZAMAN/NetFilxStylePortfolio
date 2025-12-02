import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ContinueWatching.css";

type ProfileType = "recruiter" | "developer" | "stalker" | "adventurer";

interface ContinueWatchingProps {
  profile: ProfileType;
}

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const navigate = useNavigate(); // ✅ now available

  const continueWatchingConfig = {
    recruiter: [
      {
        title: "Music",
        imgSrc:
          "https://marketplace.canva.com/EAFvLSrAX9U/1/0/1600w/canva-music-desktop-wallpaper-qgZBY-Ll2Vc.jpg",
        link: "/music",
      },
      {
        title: "Reading",
        imgSrc: "https://picsum.photos/id/1026/300/200",
        link: "/reading",
      },
      {
        title: "Blogs",
        imgSrc:
          "https://static.vecteezy.com/system/resources/previews/066/679/577/non_2x/blogging-illustration-with-blog-page-on-computer-screen-and-creative-elements-vector.jpg",
        link: "/blogs",
      },
      {
        title: "Contact Me",
        imgSrc: "https://picsum.photos/id/1029/300/200",
        link: "/contact-me",
      },
      {
        title: "Go Back",
        imgSrc:
          "https://cdn-icons-png.freepik.com/256/2459/2459514.png?semt=ais_white_label",
        action: () => navigate(-1), // ✅ works now
      },
    ],

    // (your other profiles unchanged)
    developer: [
      {
        title: "Music",
        imgSrc:
          "https://marketplace.canva.com/EAFvLSrAX9U/1/0/1600w/canva-music-desktop-wallpaper-qgZBY-Ll2Vc.jpg",
        link: "/music",
      },
      {
        title: "Reading",
        imgSrc: "https://picsum.photos/id/1026/300/200",
        link: "/reading",
      },
      {
        title: "Blogs",
        imgSrc:
          "https://static.vecteezy.com/system/resources/previews/066/679/577/non_2x/blogging-illustration-with-blog-page-on-computer-screen-and-creative-elements-vector.jpg",
        link: "/blogs",
      },
      {
        title: "Certifications",
        imgSrc: "https://picsum.photos/id/1028/300/200",
        link: "/certifications",
      },
      {
        title: "Contact Me",
        imgSrc: "https://picsum.photos/id/1029/300/200",
        link: "/contact-me",
      },
      {
        title: "Go Back",
        imgSrc:
          "https://cdn-icons-png.freepik.com/256/2459/2459514.png?semt=ais_white_label",
        action: () => navigate(-1), // ✅ works now
      },
    ],
    stalker: [
      {
        title: "Reading",
        imgSrc: "https://picsum.photos/id/1026/300/200",
        link: "/reading",
      },
      {
        title: "Blogs",
        imgSrc:
          "https://static.vecteezy.com/system/resources/previews/066/679/577/non_2x/blogging-illustration-with-blog-page-on-computer-screen-and-creative-elements-vector.jpg",
        link: "/blogs",
      },
      {
        title: "Contact Me",
        imgSrc: "https://picsum.photos/id/1029/300/200",
        link: "/contact-me",
      },
      {
        title: "Go Back",
        imgSrc:
          "https://cdn-icons-png.freepik.com/256/2459/2459514.png?semt=ais_white_label",
        action: () => navigate(-1), // ✅ works now
      },
    ],
    adventurer: [
      {
        title: "Music",
        imgSrc:
          "https://marketplace.canva.com/EAFvLSrAX9U/1/0/1600w/canva-music-desktop-wallpaper-qgZBY-Ll2Vc.jpg",
        link: "/music",
      },
      {
        title: "Reading",
        imgSrc: "https://picsum.photos/id/1026/300/200",
        link: "/reading",
      },
      {
        title: "Certifications",
        imgSrc: "https://picsum.photos/id/1028/300/200",
        link: "/certifications",
      },
      {
        title: "Contact Me",
        imgSrc: "https://picsum.photos/id/1029/300/200",
        link: "/contact-me",
      },
      {
        title: "Go Back",
        imgSrc:
          "https://cdn-icons-png.freepik.com/256/2459/2459514.png?semt=ais_white_label",
        action: () => navigate(-1), // ✅ works now
      },
    ],
  };

  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>

      <div className="card-row">
        {continueWatching.map((pick, index) => {
          if (pick.action) {
            return (
              <button
                key={index}
                className="pick-card"
                onClick={pick.action} // ✅ Go Back works
              >
                <img
                  src={pick.imgSrc}
                  alt={pick.title}
                  className="pick-image"
                />
                <div className="overlay">
                  <div className="pick-label">{pick.title}</div>
                </div>
              </button>
            );
          }

          return (
            <Link to={pick.link!} key={index} className="pick-card">
              <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
              <div className="overlay">
                <div className="pick-label">{pick.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ContinueWatching;
