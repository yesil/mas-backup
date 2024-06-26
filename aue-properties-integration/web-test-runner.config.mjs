import { chromeLauncher } from "@web/test-runner-chrome";

async function enableCORS(context, next) {
  await next();
  context.set("Access-Control-Allow-Credentials", true);
  context.set("Access-Control-Allow-Origin", context.request.headers.origin);
}

export default {
  browsers: [
    chromeLauncher({
      launchOptions: { args: ["--no-sandbox"] },
    }),
  ],
  coverageConfig: {
    include: ["src/**"],
    exclude: ["test/mocks/**", "test/**", "**/node_modules/**"],
  },
  debug: false,
  files: ["test/**/*.test.(js|html)"],
  nodeResolve: true,
  middlewares: [enableCORS],
  port: 2023,
};
