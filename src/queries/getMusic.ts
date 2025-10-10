import datoCMSClient from "./datoCMSClient";

const GET_MUSIC = `
{
music{
myfavmusic

}

}
`;

export async function getMusic() {
  const data = await datoCMSClient.request(GET_MUSIC);
  return data.music.myfavmusic;
}
