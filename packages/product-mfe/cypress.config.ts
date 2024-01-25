import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return {
        baseUrl: "http://localhost:3001",
        viewportWidth: 1366,
        viewportHeight: 768,
        env: {
          HOST_NAME_API: "dev-core.iclubs.io",
        },
      };
    },
  },
});
