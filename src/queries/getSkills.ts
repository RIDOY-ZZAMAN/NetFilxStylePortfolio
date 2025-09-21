// queries/getSkills.ts
import datoCMSClient from "./datoCMSClient";
import { Skill } from "../types";

// Fixed: Removed the square brackets '[ ]' around the field selection
const GET_SKILLS = `
  {
    skill {
      myskill
        
      
    }
  }
`;

export async function getSkills(): Promise<Skill[]> {
  const data = await datoCMSClient.request<{ skill: { myskill: Skill[] } }>(
    GET_SKILLS
  );
  // The structure of the response matches the query: data.skill.myskill
  return data.skill.myskill;
}
