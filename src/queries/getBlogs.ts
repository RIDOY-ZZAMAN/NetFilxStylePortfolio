import datoCMSClient from "./datoCMSClient";

const GET_BLOGS = `

{
blog{
myblog
}

}

`;

export async function getBlogs() {
  const data = await datoCMSClient.request(GET_BLOGS);
  return data.blog.myblog;
}
