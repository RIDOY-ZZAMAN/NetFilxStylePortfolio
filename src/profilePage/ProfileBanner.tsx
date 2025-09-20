import React, { useEffect, useState } from "react";
import "./ProfileBanner.css";
import PlayButton from "../components/PlayButton";
import MoreInfoButton from "../components/MoreInfoButton";
import { ProfileBanner as ProfileBannerType } from "../types";
import { getProfileBanner } from "../queries/getProfileBanner";

const ProfileBanner: React.FC = () => {
  const [bannerData, setBannerData] = useState<ProfileBannerType | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getProfileBanner();
      setBannerData(data);
    }
    fetchData();
  }, []);

  if (!bannerData) return <div>Loading...</div>;

  const handlePlayClick = () => {
    window.open(
      "https://drive.google.com/file/d/1t3K6HGBfb0hO8kXC2fkCuwnyEHAZjVS-/view"
    );
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/aktaruzzamanridoy/");
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">
          AKTARUZZAMAN RIDOY
        </h1>
        <p className="banner-description">{bannerData.description.desc}</p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
