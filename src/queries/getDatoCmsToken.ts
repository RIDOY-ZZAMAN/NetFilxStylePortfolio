export const getDatoCmsToken = () => {
  const hostname = window.location.hostname;
  console.log("The host name is", hostname);

  switch (hostname) {
    case "my-portfolio-85.admin.datocms.com":
    case "ror.localhost":
    case "localhost":
    case "aktaruzzamanridoy.netlify.app":
      return "7770e981b18c02ccf39b9f440cd548";
    default:
      throw new Error(`No DatoCMS token configured for hostname: ${hostname}`);
  }
};
