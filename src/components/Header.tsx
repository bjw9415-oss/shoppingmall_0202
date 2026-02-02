import  { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--color-border)' : 'none',
      zIndex: 100,
      transition: 'all 0.3s ease',
      height: 'var(--header-height)'
    }}>
      <div className="container flex justify-between" style={{ height: '100%' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
          MALL
        </h1>
        <nav className="flex" style={{ gap: '2rem' }}>
          <a href="#" style={{ fontWeight: 500 }}>Home</a>
          <a href="#" style={{ fontWeight: 500 }}>Shop</a>
          <a href="#" style={{ fontWeight: 500 }}>Cart (0)</a>
        </nav>
      </div>
    </header>
  );
}
