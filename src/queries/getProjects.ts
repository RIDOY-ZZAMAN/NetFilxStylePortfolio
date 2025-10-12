// queries/getProjects.ts
import datoCMSClient from "./datoCMSClient";
import { Project } from "../types";

const GET_PROJECTS = `
 {
project {
myproject
}

 }
`;

export async function getProjects(): Promise<Project[]> {
  const data = await datoCMSClient.request(GET_PROJECTS);
  return data.project.myproject;
}
