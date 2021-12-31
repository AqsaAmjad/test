module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { ... }

      xs2: "480px",
      // => @media (min-width: 480px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ['"Poppins"', "sans-serif"],
    },
    extend: {
      zIndex: {
        "-10": "-10",
      },
      inset: {
        "1/5": "20%",
        "2/5": "40%",
        "14%": "14%",
        "13.5%": "13.5%",
      },
      spacing: {
        18: "72px",
        500: "500px",
        575: "575px",
        378: "378px",
        674: "674px",
        450: "450px",
        "5/8": "62.5%",
        "3/8": "37.5%",
        "53%": "53%",
        "70%": "70%",
        "73%": "73%",
        "67%": "67%",
      },
      borderWidth: {
        5: "5px",
        7: "7px"
      },
     
      opacity: {
        73: "0.73",
        64: "0.64",
        67: "0.67",
        44: "0.44",
      },
      fontSize: {
        15: "15px",
        22: "22px",
        28: "28px",
        40: "40px",
        18: "18px",
      },
      borderRadius: {
        10: "10px",
        20: "20px",
        50: "50px",
      },
      backgroundPosition: {
        "left-10%": "10% 0",
        "right-10%": "right 10% bottom",
      },
      backgroundSize: {
        "100%": "100% auto",
      },
      colors: {
        gray36: "#808080",
        darkGreen: "#005C2F",
        sherpaBlue: "#084C61",
        darkBlack: "#202020",
        borderLight: "#E9E9E9",
        darkGray: "#4D4D4D",
        brownShade: "#D12D2D",
        lightGray: "#F2F2F2",
        lightestGray: "#DFDFDF",
        iconGray: "#8F8F8F",
        gray1: "#7E7E7E",
        gray2: "#636363",
        gray3: "#8D8D8D",
        gray4: "#828282",
        gray5: "#AFAFAF",
        gray6: "rgba(231, 231, 231, 0.63)",
        gray7: "#606060",
        gray8: "#F8F8FA",
        gray9: "#A6A6A6",
        gray10: "#969696",
        gray11: "#E8E8E8",
        gray12: "#645E5E",
        gray13: "#6D6D6D",
        gray15: "#D1D1D1",
        gray16: "#F9F9F9",
        gray17: "#BCBCBC",
        gray18: "#535353",
        gray19: "#F3F3F3",
        gray20: "#C4C4C4",
        gray21: "#EEEEEE",
        gray22: "#E5E5E5",
        gray23: "#DDDDDD",
        gray24: "#646464",
        gray25: "#D6D6D6",
        gray26: "#6A6A6A",
        gray27: "#9F9F9F",
        gray28: "#989898",
        gray29: "#333333",
        gray30: "#C2C2C2",
        gray31: "#E1E1E1",
        gray32: "#EDEDED",
        gray33: "#9E9E9E",
        gray34: "#E2E2E2",
        gray35: "#C1C1C1",
        gray37: "#E4E4E4",
        black1: "#262626",
        black2: "#272727",
        black3: "#0B0B0B",
        black4: "#1E1E1E",
        black5: "#292929",
        black6: "#171717",
        black7: "#414141",
        
        white1: "#F4F4F4",
        white2: "#CFCFCF",
        customBlue: "#084C61",
        blue1: "#616F86",
        blue2: "#2D5BD1",
        blue4: "#0162FF",
        blue3: "#2DB3D1",
        green1: "#078A3B",
        green2: "#2D8F43",
        golden1: "#D0A612",
        purple1: "#C75F91",
        red1: "#E40000",
        red2: "#FF4848",
        brightRed: "#FF0000",
        lightRed: "#FF9C9C",
        roughRed: "#FF4848",
        primary: "#00843D",
        "primary-light": "#b2dac5",
        "primary-medium": "#40A36D",
        "transparent-white": "#ffffff10",
        "transparent-black": "#00000050",
      },
      boxShadow: {
        shadow1: "0px 4px 25px rgba(0, 0, 0, 0.15)",
        shadow2: "0px 14px 25px rgba(0, 0, 0, 0.05)",
        shadow3: "0px 10px 20px rgba(0, 0, 0, 0.11)",
        shadow4: "0px 15px 25px rgba(0, 0, 0, 0.15)",
        shadow5: "0px 44px 34px -10px rgba(0, 0, 0, 0.55)",
      },
      dropShadow: {
        dropShadow1: "0px 15px 25px rgba(21, 21, 21, 0.25)",
        dropShadow2: "0px 15px 25px rgba(0, 0, 0, 0.15)",
        dropShadow3: "0px 0px 20px rgba(0, 0, 0, 0.25)",
      },
      letterSpacing: {
        "-0.01em": "-0.01em",
      },
      lineHeight: {
        4.5: "18px",
        6.5: "26px",
        30: "30px",
        34: "34px",
        20: "22px",
      },
      maxWidth: {
        130: "130px",
      },
      aspectRatio: {
        21: "21",
        23: "23",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      width: ["hover"],
      height: ["hover"],
      borderWidth: ["hover"],
      fontSize: ["group-hover"],
      fontWeight: ["group-hover"],
      margin: ["group-hover"],
      justifyContent: ["hover"],
      brightness: ["hover"],
      zIndex: ["hover"],
      appearance: ["hover", "focus"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-rtl"),
    require("@tailwindcss/aspect-ratio"),
  ],
  important: true,
};
