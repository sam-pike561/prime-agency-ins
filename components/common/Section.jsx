export default function Section({ children, className }) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
