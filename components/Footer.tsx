export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <p className="text-center text-xs text-neutral-500">
          © {currentYear} Caprice Tech. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}
