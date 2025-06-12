
import Link from 'next/link';

export default function Home() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('/login-bg.jpg')" }}
    >
      <div className="bg-black/60 p-10 rounded-xl shadow-lg max-w-xl w-full">
        <h1 className="text-4xl font-bold mb-4">鵝媽媽托嬰中心</h1>
        <p className="text-lg mb-6">
          提供溫馨、安全、專業的托嬰環境，讓每一位寶寶都能在愛中成長。
        </p>
        <Link href="/login">
          <span className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full transition">
            立即登入系統
          </span>
        </Link>
      </div>
    </div>
  );
}
