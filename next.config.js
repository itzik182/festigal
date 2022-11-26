// next.config.js
module.exports = {
  images: {
    domains: ['datocms-assets.com', 'www.datocms-assets.com'],
    minimumCacheTTL: 31536000,
    // unoptimized: true,
    // loader: 'custom',
    loaderFile: './images/Spinner.gif',
  },
};
