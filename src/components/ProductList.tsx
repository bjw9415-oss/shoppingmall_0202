
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';
import product5 from '../assets/product5.png';

const products = [
  { id: 1, name: 'Minimalist Chair', price: '$120', image: product1 },
  { id: 2, name: 'Modern Lamp', price: '$45', image: product2 },
  { id: 3, name: 'Ceramic Vase', price: '$35', image: product3 },
  { id: 4, name: 'Wooden Table', price: '$250', image: product4 },
  { id: 5, name: 'Art Print', price: '$80', image: product5 },
];

export default function ProductList() {
  return (
    <section className="container section">
      <div className="flex justify-between" style={{ marginBottom: 'var(--spacing-md)' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>New Arrivals</h3>
        <a href="#" style={{ 
          color: 'var(--color-accent)', 
          fontWeight: 500,
          borderBottom: '1px solid currentColor' 
        }}>
          View All
        </a>
      </div>
      
      <div className="grid" style={{ 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {products.map((product) => (
          <div key={product.id} style={{ 
            cursor: 'pointer'
          }}>
            <div style={{ 
              backgroundColor: 'var(--color-bg-secondary)',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '1rem',
              position: 'relative',
              aspectRatio: '1 / 1'
            }}>
              <img 
                src={product.image} 
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.25rem' }}>
              {product.name}
            </h4>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
