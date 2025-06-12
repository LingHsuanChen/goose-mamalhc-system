
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <div
        style={{
          backgroundImage: "url('/login-bg.jpg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <div style={{
          backgroundColor: 'rgba(0,0,0,0.6)',
          padding: '2.5rem',
          borderRadius: '1rem',
          maxWidth: '600px',
          width: '100%',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
        }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>鵝媽媽托嬰中心</h1>
          <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
            提供溫馨、安全、專業的托嬰環境，讓每一位寶寶都能在愛中成長。
          </p>
          <Link href="/login">
            <span style={{
              display: 'inline-block',
              backgroundColor: '#ec4899',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              color: 'white',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'none'
            }}>
              立即登入系統
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
