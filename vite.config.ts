import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import ViteRsw from 'vite-plugin-rsw';

export default defineConfig({
  plugins: [
    reactRefresh(),
    ViteRsw({
      crates: [
        '@rsw/chasm',
        '@rsw/game-of-life',
        '@rsw/excel-read',
      ],
    }),
  ],
})
