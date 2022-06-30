module.exports = {
  content: [
    './layouts/partials/post/**/*.{html,js}',
    './layouts/partials/main/**/*.{html,js}',
    './layouts/_default/list.html',
    './layouts/_default/single.html',
  ],
  theme: {
    extend: {
      colors: {
        main: {
          1: '#035a0e',
          2: '#038811',
          3: '#35a041',
          3: '#b3f166',
        },
      },
    },
    plugins: [],
  },
}
