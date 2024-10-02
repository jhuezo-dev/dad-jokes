import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from "url";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  assetsInclude: ["*.png", "*.avif"],
  test: {
    globals: true,
    pool: 'threads',
    // setupFiles: 'scripts/setup-vitest.ts',
    environmentMatchGlobs: [
      ['packages/{vue,vue-compat,runtime-dom}/**', 'jsdom'],
    ],
    sequence: {
      hooks: 'list',
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['packages/*/src/**'],
      exclude: [
        // entries that are not really used during tests
        'packages/vue-compat/**',
        'packages/vue/src/dev.ts',
        'packages/vue/src/runtime.ts',
        // not testable during unit tests
        'packages/runtime-core/src/profiling.ts',
        'packages/runtime-core/src/featureFlags.ts',
        'packages/runtime-core/src/customFormatter.ts',
        // tested via e2e so no coverage is collected
        'packages/runtime-core/src/hydrationStrategies.ts',
        'packages/runtime-dom/src/components/Transition*',
      ],
    },
  },
})
