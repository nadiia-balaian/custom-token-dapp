import { Component, ReactNode } from 'react';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  //eslint-disable-next-line
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  //eslint-disable-next-line
  componentDidCatch(error: any, errorInfo: any) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert">
          <h3 className='text-warning'>Sorry, an unexpected error has occurred.</h3>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;