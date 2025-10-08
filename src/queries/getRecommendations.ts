import datoCMSClient from "./datoCMSClient";

const GET_RECOMMENDATIONS = `
{
    recommendation {
      myrecommendation
        
      
    }
  }`;

export async function getRecommendations() {
  const data = await datoCMSClient.request<{
    skill: { myrecommendation: recommendation[] };
  }>(GET_RECOMMENDATIONS);

  return data.recommendation.myrecommendation;
}
