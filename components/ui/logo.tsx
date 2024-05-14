import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <img src="/images/logo-mtj.png" alt="Logo de Mi Tiendita Juntos" className="w-14 h-14" />
    </Link>
  );
}
