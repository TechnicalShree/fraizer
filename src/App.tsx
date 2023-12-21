import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./AppRoutes";
import ThemeCustomization from "./mantis/themes";

function App() {
  return (
    <BrowserRouter>
      <ThemeCustomization>
        <AppRoutes />
      </ThemeCustomization>
    </BrowserRouter>
  );
}

export default App;
