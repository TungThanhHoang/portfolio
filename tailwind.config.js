module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'grayyellowcustom': '#FFF5D5',
        'whitecustom': '#F5F4ED',
        'redcustom': '#AE4818',
        'graycustom': '#4E504B',
        'greencustom': '#738F8A',
        'orangecustom': '#D7720C',
        'darkcustom': '#0D2322',
        'yellowcustom': '#E6A54D',
      },
      maxHeight: {
        '(screen-16)': 'calc(100vh - 4rem)',
      },
    },
  },
  plugins: [],
}
