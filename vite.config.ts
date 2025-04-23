import path from "path";
import { defineConfig, UserConfig } from "vite";

const config: UserConfig = defineConfig({
  resolve: {
    alias: {
      "@services": path.resolve(__dirname, "./src/services"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@configs": path.resolve(__dirname, "./src/configs"),
      "@scripts": path.resolve(__dirname, "./src/scripts"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },
});

export default config;
