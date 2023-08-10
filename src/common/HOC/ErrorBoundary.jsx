import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('error-boundary-editorMinisiteError', { error, errorInfo });
        window.editorMinisiteError = { error, errorInfo };
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <span className=' text-danger text-center '>
                    Có lỗi xảy ra, vui lòng liên hệ bộ phận hỗ trợ kĩ thuật.
                </span>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
