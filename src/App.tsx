//providers

import {
  ThemeProvider,
  NotificationProvider,
  ThemeModeProvider,
} from "providers";

//layouts
import { MainLayout } from "layouts";

//pages
import { MainPage } from "pages";

function App() {
  return (
    <ThemeModeProvider>
      <ThemeProvider>
        <NotificationProvider>
          <MainLayout>
            <MainPage />
          </MainLayout>
        </NotificationProvider>
      </ThemeProvider>
    </ThemeModeProvider>
  );
}

export default App;
