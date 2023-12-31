import React, { Component, ErrorInfo, ReactNode } from "react";
import ErrorPage from "../errorPage/ErrorPage";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ hasError: true });
    console.error(error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <ErrorPage />;
    }

    return (
      <div
        style={{
          width: "100%",
          // only for developement purpose otherwise it should be 100%
          height: "840px",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ErrorBoundary;
