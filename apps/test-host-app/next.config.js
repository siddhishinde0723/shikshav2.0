//@ts-check

const { composePlugins, withNx } = require('@nx/next');
const webpack = require('webpack');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false, // Disable SVGR if not needed
  },
  webpack: (config) => {
    // Ensure zone.js is available globally
    config.plugins.push(
      new webpack.ProvidePlugin({
        Zone: 'zone.js/dist/zone.js', // Provides Zone globally
      })
    );

    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
