import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {};

 if (process.env.NODE_ENV === 'development') {
   await setupDevPlatform();
 }

  module.exports = {
    distDir: 'build' // Change the output directory to 'build'
  }

export default nextConfig;