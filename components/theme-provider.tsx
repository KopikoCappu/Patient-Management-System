"use client"; // Mark as client component

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      {/* Ensure client-side logic runs only after hydration */}
      <ClientThemeHandler />
      {children}
    </NextThemesProvider>
  );
}

// Client-side only logic
const ClientThemeHandler = () => {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Client-side theme handling running...");
    }
  }, []);
  return null;
};
