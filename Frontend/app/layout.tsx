import './globals.css'
import { ThemeProvider } from "../components/theme-provider"
import { Providers } from './providers';
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>)  {
  return (
    <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Providers>
              {children}
            </Providers>
          </ThemeProvider>
        </body>
      </html>
  )
}