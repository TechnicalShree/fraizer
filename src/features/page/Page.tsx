import { PropsWithChildren } from "react";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

export const Page: React.FC<PropsWithChildren> = ({ children }) => {
  return <ErrorBoundary>{children}</ErrorBoundary>;
};
