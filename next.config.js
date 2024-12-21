const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "almayo",
        mongodb_password: "7Io7qZCy4UCs4jpj",
        mongodb_clustername: "cluster0",
        mongodb_database: "web-development-blog-dev",
        openai_key: process.env.OPENAI_API_KEY,
      },
    };
  }

  return {
    env: {
      mongodb_username: "almayo",
      mongodb_password: "7Io7qZCy4UCs4jpj",
      mongodb_clustername: "cluster0",
      mongodb_database: "web-development-blog",
      openai_key: process.env.OPENAI_API_KEY,
    },
  };
};
