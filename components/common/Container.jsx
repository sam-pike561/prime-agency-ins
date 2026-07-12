export default function Container({ children, className = '' }) {
  return <div className={`site-shell ${className}`.trim()}>{children}</div>
}