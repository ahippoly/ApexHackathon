'use client';

import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery
} from '@mui/material';
import { useMemo } from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';


// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
// export const metadata: Metadata = {
//   metadataBase: new URL(siteConfig.url),
//   title: {
//     default: siteConfig.title,
//     template: `%s | ${siteConfig.title}`,
//   },
//   description: siteConfig.description,
//   robots: { index: true, follow: true },
//   // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
//   // ! copy to /favicon folder
//   icons: {
//     icon: '/favicon/favicon.ico',
//     shortcut: '/favicon/favicon-16x16.png',
//     apple: '/favicon/apple-touch-icon.png',
//   },
//   manifest: `/favicon/site.webmanifest`,
//   openGraph: {
//     url: siteConfig.url,
//     title: siteConfig.title,
//     description: siteConfig.description,
//     siteName: siteConfig.title,
//     images: [`${siteConfig.url}/images/og.jpg`],
//     type: 'website',
//     locale: 'en_US',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: siteConfig.title,
//     description: siteConfig.description,
//     images: [`${siteConfig.url}/images/og.jpg`],
//     // creator: '@th_clarence',
//   },
//   // authors: [
//   //   {
//   //     name: 'Theodorus Clarence',
//   //     url: 'https://theodorusclarence.com',
//   //   },
//   // ],
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const prefersDarkMode =
    useMediaQuery('(prefers-color-scheme: dark)') && false;
  const isMobile = useMediaQuery('(max-width:600px)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#01050e',
          },
          background: {
            default: '#ffffff',
            paper: '#f5f5f5',
          },
        },
        components: {
          // Name of the component
          MuiPaper: {
            styleOverrides: {
              // Name of the slot
              root: {
                // Some CSS
                borderRadius: '10px',
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {},
            },
          },
          MuiStack: {
            styleOverrides: {
              root: {
                minWidth: 0,
              },
            },
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <html>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <Box
              
            >
              {children}
            </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
