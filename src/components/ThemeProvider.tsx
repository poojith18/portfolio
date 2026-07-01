import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
    {children}
  </NextThemesProvider>
);

export default ThemeProvider;
