import { BrowserRouter } from "react-router-dom";
import { CountProvider } from "./providers/CountProvider";
import { Router } from "./router/Router";

export const App = () => {
  return (
    <CountProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CountProvider>
  );
};
