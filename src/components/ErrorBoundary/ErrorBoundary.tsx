import React, { Component } from 'react';

type ErrorState = {
  hasError: any;
};

class ErrorBoundary extends Component<{}, ErrorState> {
  state = { hasError: false };

  componentDidCatch(_error: any) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <div role="alert">Something went wrong</div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
