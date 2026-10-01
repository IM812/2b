/** @type {import('next').NextConfig} */
const nextConfig = {
  // touch: forces a clean Turbopack restart after removing empty app/ route folders

  images: {
    qualities: [72, 75],
  },
  ...(process.env.BUILD_STANDALONE === '1' ? { output: 'standalone' } : {}),
  async redirects() {
    return [
      { source: '/projects', destination: '/clients', permanent: true },
      { source: '/projects/:slug', destination: '/clients#:slug', permanent: true },

      // Legacy pages from the old site (2bservice.ru) that no longer exist —
      // redirect everything under them to the home page.
      { source: '/company/requisites', destination: '/details', permanent: true },
      { source: '/company', destination: '/', permanent: true },
      { source: '/company/:path*', destination: '/', permanent: true },

      { source: '/info/faq', destination: '/', permanent: true },
      { source: '/info/faq/:path*', destination: '/', permanent: true },

      { source: '/info/news', destination: '/', permanent: true },
      { source: '/info/news/:path*', destination: '/', permanent: true },

      { source: '/info/sale', destination: '/', permanent: true },
      { source: '/info/sale/:path*', destination: '/', permanent: true },

      { source: '/info/processing', destination: '/', permanent: true },
      { source: '/info/processing/:path*', destination: '/', permanent: true },

      { source: '/it-uslugi-po-kompyuteram-noutbukam-monoblokam', destination: '/', permanent: true },
      { source: '/it-uslugi-po-obsluzhivaniyu-orgtekhniki', destination: '/', permanent: true },

      // Old service sub-pages (e.g. /services/arenda/laptop). The current
      // /services page itself stays, only its old subpaths redirect.
      { source: '/services/:path+', destination: '/', permanent: true },

      { source: '/udalennaya-it-podderzhka', destination: '/', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
          { key: 'Cache-Control', value: 'no-store, max-age=0' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
}

export default nextConfig
