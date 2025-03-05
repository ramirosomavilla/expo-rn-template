import { ThemeProvider } from "@/contexts/ThemeProvider";
import { store } from "@/lib/store";
import { Slot } from "expo-router";
import { Provider } from "react-redux";

export default function HomeLayout() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Slot />
      </ThemeProvider>
    </Provider>
  );
}
