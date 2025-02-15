import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://56965d9bbb2315b125977d1018593d83@o4508822929342464.ingest.us.sentry.io/4508823013949440",
  tracesSampleRate: 1,
  debug: false,  // Turn off debug logging
  integrations: (integrations) => {
    return integrations.filter((integration) => integration.name !== "SourceMaps");
  }
});