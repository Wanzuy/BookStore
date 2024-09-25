/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/lib/esm/**/*.js",
    ],
    corePlugins: {
        container: false,
    },
    theme: {
        extend: {},
    },
    plugins: [
        require("flowbite/plugin"),
        function ({ addUtilities }) {
            const newUtilities = {
                // Đường viền chữ
                ".text-stroke": {
                    "-webkit-text-stroke": "1px #333333",
                },
                ".text-stroke-lg": {
                    "-webkit-text-stroke": "2px black",
                },
                // Đổ bóng chữ
                ".text-shadow": {
                    "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)",
                },
                ".text-shadow-md": {
                    "text-shadow": "3px 3px 6px rgba(0, 0, 0, 0.7)",
                },
            };
            addUtilities(newUtilities);
        },
        function ({ addComponents, theme }) {
            const containers = {
                ".container": {
                    maxWidth: theme("columns.7xl"),
                    marginLeft: "auto",
                    marginRight: "auto",
                    paddingLeft: theme("spacing.4"),
                    paddingRight: theme("spacing.4"),
                },
            };
            addComponents(containers);
        },
    ],
};
