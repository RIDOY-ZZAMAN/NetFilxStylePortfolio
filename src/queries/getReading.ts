import datoCMSClient from "./datoCMSClient";

const GET_READING = `
{
reading{
myreading
}
}

`;

export async function getReading() {
  const data = await datoCMSClient.request(GET_READING);
  return data.reading.myreading;
}
