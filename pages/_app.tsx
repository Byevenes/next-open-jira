import '../styles/globals.css'
import { ThemeProvider, CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import { darkTheme, lightTheme } from '../themes'
import { DisplayModalProvider } from '../context/ui'
import { DevTools } from 'jotai-devtools'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DisplayModalProvider>
      <ThemeProvider theme={darkTheme}>
        <DevTools />
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </DisplayModalProvider>
  )
}
