import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
// @ts-check
 
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  distDir: 'build' // Change the output directory to 'build'
}

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}
 
export default nextConfig