import React, { useEffect, useState } from "react";
import "./Skills.css";
import { FaReact, FaNodeJs, FaCodeBranch } from "react-icons/fa";
import { SiHtml5, SiCss3 } from "react-icons/si";
import { Skill } from "../types";
import { getSkills } from "../queries/getSkills";

const iconMap: { [key: string]: JSX.Element } = {
  FaNodeJs: <FaNodeJs />,
  FaCodeBranch: <FaCodeBranch />,
  FaReact: <FaReact />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
};

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getSkills();
      setSkillsData(data);
    }
    fetchData();
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || null}</div>
                <h3 className="skill-name">
                  {skill.name.split("").map((letter: any, i: number) => (
                    <span
                      key={i}
                      className="letter"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
