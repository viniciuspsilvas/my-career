import localFont from 'next/font/local'

export const aguda = localFont({
  src: [
    {
      path: '../public/fonts/Aguda-Regular.otf',
      weight: '400'
    },
    {
      path: '../public/fonts/Aguda-Bold.otf',
      weight: '700'
    }
  ],
  variable: '--font-aguda'
})
