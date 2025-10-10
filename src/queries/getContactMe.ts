// queries/getContactMe.ts
import datoCMSClient from "./datoCMSClient";
import { ContactMe } from "../types";

const GET_CONTACT_ME = `
   {
contactme {
contactme

}
   
  }
`;

export async function getContactMe(): Promise<ContactMe> {
  const data = await datoCMSClient.request<{ contactme: contactme }>(
    GET_CONTACT_ME
  );
  return data.contactme.contactme;
}
