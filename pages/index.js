
import Link from 'next/link';
export default function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold">鵝媽媽托嬰中心系統</h1>
      <p className="mt-4">請點此 <Link href="/login" className="text-blue-500 underline">登入</Link></p>
    </div>
  );
}
