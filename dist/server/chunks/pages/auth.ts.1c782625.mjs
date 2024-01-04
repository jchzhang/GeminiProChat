const realPassword = ({}).SITE_PASSWORD || "";
const passList = realPassword.split(",") || [];
const post = async (context) => {
  const body = await context.request.json();
  const { pass } = body;
  return new Response(JSON.stringify({
    code: !realPassword || pass === realPassword || passList.includes(pass) ? 0 : -1
  }));
};

export { post };
