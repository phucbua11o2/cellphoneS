import React from "react";

export class ErrorBoundary extends React.Component {
    constructor(props:any) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error: any) {
        return { hasError: true, error: null, errorInfo: null };
    }

    componentDidCatch(error: any, errorInfo: any) {
        this.setState({ hasError: true, error: error, errorInfo: errorInfo })
    }

    render() {
        if ((this.state as any).hasError) {
            return <><h1>Something went wrong.</h1>
                <div dangerouslySetInnerHTML={{ __html: (this.state as any).error }} />
                <div dangerouslySetInnerHTML={{ __html: JSON.stringify((this.state as any).errorInfo) }} />
                <button onClick={() => { this.setState({ hasError: false, error: null, errorInfo: null }) }}>Try again!!</button>
            </>;
        }
        return (this.props as any).children;
    }
}
