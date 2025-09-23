// queries/getTimeline.ts
import datoCMSClient from "./datoCMSClient";
import { TimelineItem } from "../types";

const GET_TIMELINE = `
{
 workexperience {
   alltimelines
  }
}
`;

export async function getTimeline(): Promise<TimelineItem[]> {
  const data = await datoCMSClient.request<{
    workexperience: { alltimelines: TimelineItem[] };
  }>(GET_TIMELINE);
  return data.workexperience.alltimelines;
}
