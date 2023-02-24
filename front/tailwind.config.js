module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        320: '320px',
      },
      width: {
        190: '190px',
        275: '275px',
        300: '300px',
        340: '340px',
        350: '350px',
        656: '656px',
        880: '880px',
        508: '508px',
      },
      height: {
        80: '80px',
        340: '340px',
        370: '370px',
        420: '420px',
        510: '510px',
        600: '600px',
        685: '685px',
        800: '800px',
        '90vh': '90vh',
      },
      flex: {
        0.7: '0.7 1 0%',
      },
      maxHeight: {
        370: '370px',
      },
      minWidth: {
        210: '210px',
        350: '350px',
        620: '620px',
      },
      textColor: {
        lightGray: '#F1EFEE',
        primary: '#FAFAFA',
        secColor: '#efefef',
        navColor: '#BEBEBE',
      },
      backgroundColor: {
        mainColor: '#FBF8F9',
        secondaryColor: '#F0F0F0',
        blackOverlay: 'rgba(0, 0 ,0 ,0.7)',
        orange: '#fca61f',
        gray: 'rgba(36, 45, 73, 0.65)',
        yellow: '#f5c32c',
        profileShadow: '0px 4px 17px 2px rgba(0, 0, 0, 0.25)',
        black: '#242d49',
        hrColor: '#cfcdcd',
        cardColor: 'rgba(255, 255, 255, 0.64)',
        buttonBg: 'linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)',
        inputColor: 'rgba(40, 52, 62, 0.07)',
        photo: '#4CB256',
        video: '#4A4EB7',
        location: '#EF5757',
        shedule: '#E1AE4A',
      },
      keyframes: {
        'slide-in': {
          '0%': {
            '-webkit-transform': 'translateX(-200px)',
            transform: 'translateX(-200px)',
          },
          '100%': {
            '-webkit-transform': 'translateX(0px)',
            transform: 'translateX(0px)',
          },
        },

        'slide-fwd': {
          '0%': {
            '-webkit-transform': 'translateZ(0px)',
            transform: 'translateZ(0px)',
          },
          '100%': {
            '-webkit-transform': 'translateZ(160px)',
            transform: 'translateZ(160px)',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out',
        'slide-fwd': ' slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      transitionProperty: {
        height: 'height',
      },
    },
    cursor: {
      'zoom-in': 'zoom-in',
      pointer: 'pointer',
    },
  },
  variants: {
    // backgroundColor: ['active'],
    extend: {},
  },
  plugins: [],
};
