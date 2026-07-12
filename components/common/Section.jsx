import Container from './Container'

export default function Section({ children, className = '', id = '' }) {
  return (
    <section className={`section ${className}`.trim()} id={id || undefined}>
      <Container>{children}</Container>
    </section>
  )
}