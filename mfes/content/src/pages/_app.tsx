// import { ThemeProvider, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@shikshav2.0/shared';
// import customTheme from '../theme/theme';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  const URL_LOGIN = process.env.NEXT_PUBLIC_LOGIN;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accToken = localStorage.getItem('accToken');

      if (!accToken) {
        if (typeof URL_LOGIN === 'string') {
          window.location.href = URL_LOGIN;
        }
      }
    }
  }, []);

  return (
    // <ThemeProvider theme={customTheme}>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
