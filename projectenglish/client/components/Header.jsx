import Link from 'next/link';

export function Header({ content }) {
  const nav = content?.nav ?? {};
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <Link href="/" className="logo">
            <img src="/assets/images/logo.png" alt="" />
          </Link>
          <nav>
            <Link href="/gallery" className="header-link">
              {nav.gallery}
            </Link>
            <Link href="/contact-us" className="header-link">
              {nav.contacts}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
