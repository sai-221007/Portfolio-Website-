import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#121214] text-[#F3F4F6] p-8 flex flex-col items-center justify-center font-mono">
          <div className="max-w-xl p-6 rounded-3xl bg-[#18181C] border border-[#2D2D35] shadow-2xl space-y-4">
            <h2 className="text-xl font-bold text-[#D4B2A7]">Application Initialization Notice</h2>
            <p className="text-sm text-gray-400">An unexpected component error occurred while rendering:</p>
            <pre className="p-4 rounded-xl bg-[#121214] text-rose-400 text-xs overflow-auto">
              {this.state.error?.stack || this.state.error?.toString()}
            </pre>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 rounded-xl bg-[#D4B2A7] text-[#121214] font-semibold text-xs hover:opacity-90 transition-opacity"
            >
              Refresh Workspace
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
