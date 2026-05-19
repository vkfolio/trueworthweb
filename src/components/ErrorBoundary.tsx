import { Component, type ReactNode, type ErrorInfo } from 'react'

type Props = { name: string; children: ReactNode }
type State = { error: Error | null; info: ErrorInfo | null }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null, info: null }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ error, info })
    console.error(`[ErrorBoundary:${this.props.name}]`, error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="relative z-10 bg-red-950/40 border border-red-500/40 text-red-100 p-6 m-6 rounded-lg font-mono text-sm whitespace-pre-wrap">
          <div className="font-bold mb-2 text-red-300">
            {this.props.name} crashed:
          </div>
          <div className="mb-2">{this.state.error.message}</div>
          {this.state.error.stack && (
            <div className="opacity-70 text-xs overflow-auto max-h-60">
              {this.state.error.stack}
            </div>
          )}
        </div>
      )
    }
    return this.props.children
  }
}
