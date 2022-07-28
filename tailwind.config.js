/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        main: "#be185a",
        mainLight: "#e51d63",
        mainDark: "#a91456",
        grey: "#f3f3f3", 
        greyDark: "#707070",
        black: "#343434",
        blackest: "#000000",
        blacklight: "#12131a",
        white: "#ffffff",
        white03: "rgba(255, 255, 255, 0.3)",
        danger: "#ff0000",
        memberBgColor: "#f2f4f8",
        black85: '#262626',
        black65: '#595959',
        black45: '#8c8c8c',
        black25: "#bfbfbf",
        black15: "#d9d9d9",
        black6: "#f0f0f0",
        black4: "#f5f5f5",
        black2: "#fafafa", 
      },
      spacing: {
        "100per": "100%",
        "90per": "90%",
        "80per": "80%",
        "50per": "50%",
        "40per": "40%",
        "30per": "30%",
        page_px_lg: "9.5%",
        page_px_md: "6.25%",
        page_px_sm: "3%",
        icon_large: "64px",
        icon_medium: "48px",
        icon_small: "32px",
        icon_button: "16px",
        bannerHome_pb: "517px",
        itemSpaceHeight: "194px",
        itemSpaceHeightLg: "100px",
        itemSpaceWidthLg: "170px",
        itemBlogHeight: "170px",
        itemLanguageFlag: "1em",
        pyModalXl: "55px",
        pxModalXl: "80px",
        pyModalLg: "46px",
        pxModalLg: "60px",
        pyModalMd: "23px",
        pxModalMd: "30px",
        pyModalSm: "17px",
        pxModalSm: "23px",
        
      },
      zIndex: {
        topHeaderHome: "1000",
        fixedItem: "1200",
        modalCover: "1058",
        modal: "1059",
      },
      fontSize: {
        webTitle_lg: "2.25em",
        webTitle_md: "1.8em",
        webTitle_sm: "1.5em",
        webDesc: "1.25em",
        iconFooterSocial: "1.5em",
        iconLg: "64px",
        iconMd: "48px",
        iconSm: "32px",
        iconMenu: "24px",
        icon20: "20px",
        iconButton: "16px",
        titleModalXl: ['32px','39px'],
        titleModalLg: ['24px','30px'],
        titleModalMd: ['16px','20px'],
        titleModalSm: ['14px','16px'],
      },
      fontFamily: {
        sans: ["sans-serif"],
        kozgopr6n: ["KozGoPr6N"],
      },
      maxWidth: {
        "40per": "40%",
        "50per": "50%",
        "75per": "75%",
        "90per": "90%",
      },
      minWidth: {
        itemLanguage: "120px",
        "40per": "40%",
        "50per": "50%",
        "75per": "75%",
        "90per": "90%",
      },
      minHeight: {
        "40per": "40%",
        "50per": "50%",
        "75per": "75%",
        "90per": "90%",
        bannerHome: "130vh",
        itemBlogHeight: "170px",
      },
      boxShadow: {
        light: "0 2px 8px 0 rgba(0,0,0,0.2)",
      },
      borderRadius: {
        circle: "50%",
        modal: "20px"
      },
      screens: {
        xs: "346px",
      },
    },
  },
  plugins: [],
};
//e99b42