import React, { useEffect, useState } from "react";
import "./Music.css";
import { getMusic } from "../queries/getMusic";

const favoriteGenres = ["Islamic", "Classic"];

const Music: React.FC = () => {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    async function fetchMusics() {
      const data = await getMusic();
      console.log("Consoling from the Music tsx", data);
      setMusic(data);
    }

    fetchMusics();
  }, []);

  // Function to convert YouTube URLs to embed format
  const getEmbedUrl = (url) => {
    if (!url) return null;

    // If it's already an embed URL, return as is
    if (url.includes("youtube.com/embed/")) {
      return url;
    }

    // Extract video ID from various YouTube URL formats
    const videoId = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );

    if (videoId && videoId[1]) {
      return `https://www.youtube.com/embed/${videoId[1]}`;
    }

    return null;
  };

  return (
    <div className="music-page">
      <div className="genre-section">
        <h3>Genre</h3>
        <div className="genres">
          {favoriteGenres.map((genre, index) => (
            <div
              key={index}
              className="genre-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="albums-section">
        <h3>Favorite Musics</h3>
        <div className="albums">
          {music.map((album, index) => {
            const embedUrl = getEmbedUrl(album.musicurl);

            return (
              <div
                key={index}
                className="album-card"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {embedUrl ? (
                  <iframe
                    width="100%"
                    height="200"
                    src={embedUrl}
                    title={`YouTube video player for ${album.title || "album"}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="no-video-placeholder">
                    <p>Video not available</p>
                  </div>
                )}

                {/* Album Info */}
                <div className="album-info"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Music;
