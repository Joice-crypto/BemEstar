import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     fontFamily: {
      sans: 'var(--font-roboto)', 
      alt: 'var(--font-baijamjuree)',
     },
     colors:{
      green:{

        Light:'#e6f6f4',
        Lighthover:'#d9f2ef',
        Lightactive:'#b0e4dd',
        Normal:'#00a991',
        Normalhover:'#009883',
        Normalactive:'#008774',
        Dark:'#007f6d',
        Darkhover:'#006557',
        Darkactive:'#004c41',
        Darker:'#003b33',
             
      },
      blue: {

        Light:'#f9fdfc',
        Lighthover:'#f5fcfb',
        Lightactive:'#ebf8f7',
        Normal:'#bfeae5',
        Normalhover:'#acd3ce',
        Normalactive:'#99bbb7',
        Dark:'#8fb0ac',
        Darkhover:'#738c89',
        Darkactive:'#566967',
        Darker:'#435250',
        
      },

      white: {

        Light:'#fdfdfd',
        Lighthover:'#fbfbfb',
        Lightactive:'#f7f7f7',
        Normal:'#e6e6e6',
        Normalhover:'#cfcfcf',
        Normalactive:'#b8b8b8',
        Dark:'#adadad',
        Darkhover:'#8a8a8a',
        Darkactive:'#676767',
        Darker:'#515151',
        
      }

     }, 

     borderRadius: {
      'none': '0',
      'sm': '.125rem',
      'DEFAULT': '.25rem',
      'lg':'10rem',
      'full':'9999px',
     }

    },
  },
  plugins: [],
}
export default config
