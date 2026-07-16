export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-muted-dim sm:flex-row">
        <span className="font-mono">© {new Date().getFullYear()} Guilhermy Deveza</span>
        <span className="font-mono">Feito com Next.js &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
