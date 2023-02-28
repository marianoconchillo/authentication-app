/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                sm: "480px",
                md: "768px",
                lg: "976px",
                xl: "1440px",
            },
            colors: {
                background: "#FAFAFB",
                font: "#333333",
                input: "#828282",
                blueButton: "#2F80ED",
                login: "#2D9CDB",
            },
        },
    },
    plugins: [],
};
