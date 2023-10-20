import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationProvider } from "./src/services/authentication/authentication.context";
import "react-native-gesture-handler";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationProvider>
          <Navigation />
          <StatusBar style="auto" />
        </AuthenticationProvider>
      </ThemeProvider>
    </>
  );
}
