
export default function Footer() {
  return (
    <footer style={{ 
      borderTop: '1px solid var(--color-border)',
      padding: 'var(--spacing-lg) 0',
      marginTop: 'var(--spacing-xl)'
    }}>
      <div className="container text-center">
        <p style={{ color: 'var(--color-text-secondary)' }}>
          &copy; 2026 MALL. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
