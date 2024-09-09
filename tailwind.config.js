/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'DEFAULT': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
			colors: {
				'highlight': '#6ac9a2',
			},
		}
  },
  plugins: [],
}

