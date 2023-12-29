import { PropsWithChildren } from "react";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import AppContextProvider from "../../contexts/AppContext";

export const Page: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ErrorBoundary>
      <AppContextProvider>{children}</AppContextProvider>
    </ErrorBoundary>
  );
};
