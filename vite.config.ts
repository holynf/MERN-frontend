import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
import checker from "vite-plugin-checker";

export default defineConfig({
    plugins: [
        react(),
        checker({
            overlay: { initialIsOpen: false },
            typescript: true,
        }),
        viteTsconfigPaths(),
        svgrPlugin(),
    ],
});
