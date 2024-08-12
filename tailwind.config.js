const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
            },
            colors: {
                bright_green: "#0DFF4E",
                event_gray: "#202020",
                bg_black: "#0B0F12"
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 }
                },
                fadeOut: {
                    "0%": { opacity: 1 },
                    "100%": { opacity: 0 }
                }
            },
            animation: {
                fadeIn: "fadeIn 0.5s ease-in-out",
                fadeOut: "fadeOut 0.5s ease-in-out"
            }
        },
        plugins: []
    }
};
