const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  const envConfig = {
    mongodb_username: process.env.MONGODB_USERNAME,
    mongodb_password: process.env.MONGODB_PASSWORD,
    mongodb_clustername: process.env.MONGODB_CLUSTERNAME,
  };

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        ...envConfig,
        mongodb_database: "web-development-blog-dev",
      },
    };
  }

  return {
    env: {
      ...envConfig,
      mongodb_database: "web-development-blog",
    },
  };
};
