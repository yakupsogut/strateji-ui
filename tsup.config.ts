import { defineConfig } from 'tsup';
import { copyFile } from 'fs/promises';
import { join } from 'path';

export default defineConfig([
  // UI Kütüphanesi için yapılandırma
  {
    entry: ['src/lib/strateji-ui/index.ts'],
    format: ['cjs', 'esm'],
    dts: {
      compilerOptions: {
        composite: false,
        incremental: false
      }
    },
    clean: true,
    outDir: 'dist',
    treeshake: true,
    sourcemap: true,
    minify: true,
    splitting: false,
    async onSuccess() {
      // styles.css dosyasını kopyala
      await copyFile(
        join(process.cwd(), 'src', 'lib', 'strateji-ui', 'styles.css'),
        join(process.cwd(), 'styles.css')
      );
    },
  },
  // CLI aracı için yapılandırma
  {
    entry: ['src/cli/docs.ts'],
    format: ['cjs'],
    platform: 'node',
    outDir: 'dist/cli',
    clean: false,
    noExternal: ['*'],
    dts: false,
    minify: true,
    sourcemap: true,
  },
]); 