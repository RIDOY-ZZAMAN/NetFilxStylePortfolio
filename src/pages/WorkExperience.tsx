import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork as WorkIcon } from "react-icons/md";
import { IoSchool as SchoolIcon } from "react-icons/io5";
import { FaStar as StarIcon } from "react-icons/fa";
import "./WorkExperience.css";
import { TimelineItem } from "../types";
import { getTimeline } from "../queries/getTimeline";
import GoBackButton from "../components/GoBackButton";

const WorkExperience: React.FC = () => {
  const [timeLineData, setTimeLineData] = useState<TimelineItem[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getTimeline();
      console.log("Loging from WorkEx tsx", data);

      setTimeLineData(data);
    }
    fetchData();
  }, []);

  if (!timeLineData) return <div>Loading...</div>;
  console.log("🚀 ~ timeLineData:", timeLineData);

  return (
    <>
      <div className="timeline-container">
        <GoBackButton />
        <h2 className="timeline-title">
          📅 Work Experience & Education Timeline
        </h2>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === "work"
                ? index === 0
                  ? { background: "rgb(33, 150, 243)", color: "#fff" }
                  : { background: "rgb(219, 184, 184)", color: "#fff" }
                : { background: "rgb(184, 180, 181)", color: "#fff" } // Lighter red for education
            }
            contentArrowStyle={
              item.timelineType === "work"
                ? {
                    borderRight:
                      index === 0
                        ? "7px solid rgb(33, 150, 243)"
                        : "7px solid rgb(240, 240, 240)",
                  }
                : { borderRight: "7px solid rgb(255, 224, 230)" }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === "work"
                ? { background: "rgb(33, 150, 243)", color: "#fff" }
                : { background: "rgb(255, 160, 200)", color: "#fff" } // Softer red for education icon
            }
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelineType === "work" ? (
              <div style={{ color: "black" }}>
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {item.title}
                </h4>
                <p className="vertical-timeline-element-tech">
                  🔧 {item.techStack}
                </p>
                <p>{item.summaryPoints}</p>
              </div>
            ) : (
              <div style={{ color: "black" }}>
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {item.title}
                </h4>
                <p>{item.summaryPoints}</p>
              </div>
            )}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
