export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono-tag text-[11px] text-faint">© {new Date().getFullYear()} Nazanin Ghobadi</p>
        <p className="font-mono-tag text-[11px] text-faint">built with React &amp; Tailwind</p>
      </div>
    </footer>
  )
}
