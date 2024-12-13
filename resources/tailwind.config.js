/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#113F67", // Warna utama
                    light: "#6cb2eb",
                    dark: "#226597",
                    custom: "#F3F9FB",
                },
                white: "#F3F9FB", // Warna putih
                default: "#FFFFFF", // Warna default
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "1rem",
                    lg: "1rem",
                    xl: "6rem",
                    "2xl": "6rem",
                },
            },
            fontFamily: {
                poppins: ["Poppins"],
                main: ["Poppins"],
            },
        },
    },
    plugins: [],
};
