export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-semibold text-white">Prime Agency Insurance</p>
          <p className="mt-2 text-sm">Licensed insurance guidance for Medicare and health coverage decisions.</p>
        </div>
        <div className="text-sm">
          <p>Call: 1 (877) 607-1446</p>
          <p className="mt-1">© {new Date().getFullYear()} Prime Agency Insurance</p>
        </div>
      </div>
    </footer>
  );
}
