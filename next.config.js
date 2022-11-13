const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "audtlr",
        mongodb_password: "nxhYrEZyYpajzBBY",
        mongodb_clustername: "cluster0",
        mongodb_database: "BlogContact-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "audtlr",
      mongodb_password: "nxhYrEZyYpajzBBY",
      mongodb_clustername: "cluster0",
      mongodb_database: "BlogContact",
    },
  };
};
