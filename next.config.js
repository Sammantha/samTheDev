import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

module.exports = {
  distDir: 'build' // Change the output directory to 'build'
}

/** @type {import('next').NextConfig} */
const nextConfig = {};

 if (process.env.NODE_ENV === 'development') {
   await setupDevPlatform();
 }

export default nextConfig;