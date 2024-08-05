/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
    darkMode: "selector",
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
