export const getDatoCmsToken = () => {
  const hostname = window.location.hostname;
  console.log("The host name is", import.meta.env.VITE_DATOCMS_ROR_TOKEN);

  switch (hostname) {
    case "my-portfolio-85.admin.datocms.com":
    case "ror.localhost":
    case "localhost":
    case "aktaruzzamanridoy.netlify.app":
      return import.meta.env.VITE_DATOCMS_ROR_TOKEN;
    default:
      throw new Error(`No DatoCMS token configured for hostname: ${hostname}`);
  }
};
