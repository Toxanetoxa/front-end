/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      cursor: {
        custom: 'url("/assets/img/cursor/cursor.svg"), default',
        pointerCustom: 'url("/assets/img/cursor/cursor-pointer.svg"), pointer',
      },
    },
  },
  plugins: [],
};
