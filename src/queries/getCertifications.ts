// queries/getCertifications.ts
import datoCMSClient from "./datoCMSClient";
import { Certification } from "../types";

const GET_CERTIFICATIONS = `
   {
    certificate {
   mycertificate 
    
    }
  }
`;

export async function getCertifications(): Promise<Certification[]> {
  const data = await datoCMSClient.request<{
    allCertifications: Certification[];
  }>(GET_CERTIFICATIONS);
  return data.certificate.mycertificate;
}
