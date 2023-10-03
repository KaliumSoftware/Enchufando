/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_HOST: 'localhost',
    DB_USER: 'postgres',
    DB_PASSWORD: 123,
    DB_NAME: 'enchufando',
    DB_PORT: 5000
  },
  experimental: {
    forceSwcTransforms: true
  }
};

module.exports = nextConfig;
