import { ProfileBanner } from "../types";
import datoCMSClient from "./datoCMSClient";

const GET_PROFILE_BANNER = `
 {
description{
    desc
    linkedin
    resumelink
  }
}
`;

export async function getProfileBanner(): Promise<ProfileBanner> {
  const data = await datoCMSClient.request<{ description: ProfileBanner }>(
    GET_PROFILE_BANNER
  );
  console.log("🚀 ~ getProfileBanner ~ data:", data);
  return data;
}
