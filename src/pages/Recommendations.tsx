import React from "react";
import "./Recommendations.css";
import { useEffect, useState } from "react";
import { getRecommendations } from "../queries/getRecommendations";
import GoBackButton from "../components/GoBackButton";
const Recommendations: React.FC = () => {
  const [recommdentationsData, setRecommandationData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getRecommendations();
      setRecommandationData(data);
    }
    fetchData();
  }, []);

  if (recommdentationsData.length == 0) return <div>Loading ...</div>;

  return (
    <div className="timeline-container">
      <GoBackButton></GoBackButton>
      <div className="recommendation-card">
        {recommdentationsData.map((recommendation, index) => (
          <div className="recommendation-header" key={index}>
            <img
              src={recommendation.image}
              alt="Nagendra Rijal Upadhyaya"
              className="profile-pic"
            />
            <div>
              <h3>{recommendation.name}</h3>
              <p>{recommendation.organization}</p>
              <p className="date">{recommendation.date}</p>
              <p className="recommendationdetails">
                {recommendation.recommendationdetails}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
