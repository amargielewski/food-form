import { createContext, ReactChild, useState, useContext } from "react";

type ThemeModeProviderProps = {
  children: ReactChild;
};

type ThemeModeContext = {
  mode: ThemeMode;
  toggleThemeMode: () => void;
};

const Context = createContext<ThemeModeContext | null>(null);

export type ThemeMode = "dark" | "light";

export const ThemeModeProvider = ({ children }: ThemeModeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  const toggleThemeMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <Context.Provider
      value={{
        mode,
        toggleThemeMode,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useThemeModeContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error(
      "useThemeModeContext must be used within a ThemeModeContextProvider"
    );
  }

  return context;
};
