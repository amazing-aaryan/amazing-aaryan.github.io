import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink px-5 text-paper">
      <div className="max-w-xl border border-bone/20 bg-charcoal p-8">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-vermilion">
          404 / missing file
        </p>
        <h1 className="mt-4 font-serif text-5xl">This record is not in the archive.</h1>
        <p className="mt-5 leading-7 text-bone/75">
          The route may have moved, or the case file has not been published.
        </p>
        <Link href="/" className="mt-8 inline-block bg-old-gold px-4 py-3 font-mono text-xs uppercase tracking-[0.16em] text-ink hover:bg-maize">
          Return home
        </Link>
      </div>
    </main>
  );
}
