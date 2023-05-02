/** @type {import('tailwindcss').Config} */
const { createThemes } = require("tw-colors");
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [
        createThemes({
            default: {
                AP_AccentFont: "#146B90",
                AP_SecondaryFont: "#233E6580",
                AP_DarkFont: "#13263D",
                AP_WarningFont: "#eeb72a",
                AP_DangerFont: "#c62760",
                AP_BrownFont: "#2f1719",
            },
        }),
    ],
};
