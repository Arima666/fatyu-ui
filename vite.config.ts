import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";
import { defineConfig } from "vite";

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // 添加UnoCSS插件
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
  ],

  // 添加库模式配置
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "FatyuUI",
      fileName: "fatyu-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },
});
