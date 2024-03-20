// vite.config.js
import { defineConfig } from "file:///D:/%E5%89%8D%E7%AB%AFdemo/react/react-init-vite/node_modules/vite/dist/node/index.js";
import react from "file:///D:/%E5%89%8D%E7%AB%AFdemo/react/react-init-vite/node_modules/@vitejs/plugin-react/dist/index.mjs";
import UnoCSS from "file:///D:/%E5%89%8D%E7%AB%AFdemo/react/react-init-vite/node_modules/.store/unocss@0.58.6/node_modules/unocss/dist/vite.mjs";
import { presetIcons, presetAttributify, presetUno } from "file:///D:/%E5%89%8D%E7%AB%AFdemo/react/react-init-vite/node_modules/.store/unocss@0.58.6/node_modules/unocss/dist/index.mjs";
import { fileURLToPath, URL } from "node:url";
var __vite_injected_original_import_meta_url = "file:///D:/%E5%89%8D%E7%AB%AFdemo/react/react-init-vite/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    UnoCSS({ presets: [presetIcons(), presetAttributify(), presetUno()] })
  ],
  server: {
    host: "0.0.0.0"
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTUyNERcdTdBRUZkZW1vXFxcXHJlYWN0XFxcXHJlYWN0LWluaXQtdml0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU1MjREXHU3QUVGZGVtb1xcXFxyZWFjdFxcXFxyZWFjdC1pbml0LXZpdGVcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyVFNSU4OSU4RCVFNyVBQiVBRmRlbW8vcmVhY3QvcmVhY3QtaW5pdC12aXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSdcbmltcG9ydCB7IHByZXNldEljb25zLCBwcmVzZXRBdHRyaWJ1dGlmeSwgcHJlc2V0VW5vIH0gZnJvbSAndW5vY3NzJ1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnO1xuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIFVub0NTUyh7IHByZXNldHM6IFtwcmVzZXRJY29ucygpLCBwcmVzZXRBdHRyaWJ1dGlmeSgpLCBwcmVzZXRVbm8oKV0gfSksXG4gIF0sXG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6ICcwLjAuMC4wJ1xuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVMsU0FBUyxvQkFBb0I7QUFDcFUsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sWUFBWTtBQUNuQixTQUFTLGFBQWEsbUJBQW1CLGlCQUFpQjtBQUMxRCxTQUFTLGVBQWUsV0FBVztBQUowSSxJQUFNLDJDQUEyQztBQU05TixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixPQUFPLEVBQUUsU0FBUyxDQUFDLFlBQVksR0FBRyxrQkFBa0IsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDO0FBQUEsRUFDdkU7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
