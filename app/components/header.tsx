import Link from 'next/link';

function Header() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/menu">Menu</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
