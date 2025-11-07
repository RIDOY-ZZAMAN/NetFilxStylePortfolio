import React from "react";
import "./GitHubButton.css";

interface GitHubButtonProps {
  onClick: () => void;
  label?: string;
}

const GitHubButton: React.FC<GitHubButtonProps> = ({
  onClick,
  label = "View on GitHub",
}) => {
  return (
    <button className="github-button" onClick={onClick} type="button">
      <div className="icon-containerGit">
        {/* GitHub SVG Logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          role="img"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          aria-hidden="true"
        >
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 
            5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
            0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 
            -.546-1.385-1.333-1.754-1.333-1.754-1.09-.744.084-.729.084-.729 
            1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605 
            -2.665-.305-5.466-1.332-5.466-5.93 
            0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
            0 0 1.005-.322 3.3 1.23a11.48 11.48 0 0 1 3-.405c1.02.005 2.045.138 3 .405 
            2.28-1.552 3.285-1.23 3.285-1.23 
            .645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 
            0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.096.81 2.215 
            0 1.6-.015 2.885-.015 3.28 
            0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297 
            c0-6.627-5.373-12-12-12"
          />
        </svg>
      </div>
      <div className="spacerGit"></div>
      <span className="labelGit">{label}</span>
    </button>
  );
};

export default GitHubButton;
