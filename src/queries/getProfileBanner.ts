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

export async function getProfileBanner() {
  const data = await datoCMSClient.request(GET_PROFILE_BANNER);
  console.log(
    "🚀 ~ getProfileBanner ~ data:",
    data.description.desc,
    data.description.linkedin,
    data.description.resumelink
  );
  return data;
}
