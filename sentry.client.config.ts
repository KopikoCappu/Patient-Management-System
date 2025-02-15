// next.config.js
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  // Your Next.js config here
};

const sentryWebpackPluginOptions = {
  // Only in CI, upload source maps for Sentry
  silent: !process.env.CI,
  // Auto delete source maps after upload
  sourcemaps: {
    deleteSourcemapsAfterUpload: true,
  },
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
