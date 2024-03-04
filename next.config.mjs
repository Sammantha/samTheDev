// @ts-check
 
/** @type {import('next').NextConfig} */
const NextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'photos.app.goo.gl',
            port: '',
            pathname: '/*',
        }],
    },
}
   
export default NextConfig;