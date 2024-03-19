

/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    taint: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  }
};
