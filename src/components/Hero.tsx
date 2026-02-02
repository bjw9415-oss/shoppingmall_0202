

export default function Hero() {
  return (
    <section className="section text-center" style={{ 
      backgroundColor: 'var(--color-bg-secondary)',
      padding: 'var(--spacing-xl) 0',
      marginBottom: 'var(--spacing-lg)'
    }}>
      <div className="container">
        <h2 style={{ 
          fontSize: '3.5rem', 
          fontWeight: 800, 
          marginBottom: 'var(--spacing-md)',
          lineHeight: 1.2
        }}>
          Essential Items<br />for Your Daily Life
        </h2>
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--color-text-secondary)',
          marginBottom: 'var(--spacing-lg)',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Discover our curated collection of premium products designed to elevate your lifestyle.
        </p>
        <button style={{
          backgroundColor: 'var(--color-accent)',
          color: 'white',
          padding: '1rem 2.5rem',
          fontSize: '1.1rem',
          borderRadius: '4px',
          fontWeight: 600,
          letterSpacing: '0.02em'
        }}>
          Shop Collection
        </button>
      </div>
    </section>
  );
}
