export default function Button({ children, className, href, ...props }) {
  const baseClassName = `group relative inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#163f15]/30 ${className || ""}`;

  if (href) {
    return (
      <a href={href} className={baseClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClassName} {...props}>
      {children}
    </button>
  );
}
