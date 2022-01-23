module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        grayyellowcustom: "#FFF5D5",
        whitecustom: "#F5F4ED",
        redcustom: "#AE4818",
        graycustom: "#4E504B",
        greencustom: "#738F8A",
        orangecustom: "#D7720C",
        darkcustom: "#0D2322",
        yellowcustom: "#E6A54D",
        colordark: "#0f172a",
        colordark2: "#000011",
        colordark3: "#242b42",
        colorbutton: "#43cea2",
        colorbutton2: "#185a9d",
      },
      height: {
        128: "35rem",
        
      },
      width: {
        90: "23rem",
      },
      maxHeight: {
        "(screen-16)": "calc(100vh - 4rem)",
      },
    },
  },
  plugins: [],
};
