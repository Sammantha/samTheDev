import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
// @ts-check
 
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  output: '.vercel/output/static' // Change the output directory to 'build'
}

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}
 
export default nextConfig