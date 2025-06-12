
export default function Login() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-xl font-bold">登入系統</h1>
      <form className="mt-4 flex flex-col items-center">
        <input type="email" placeholder="Email" className="border p-2 mb-2" />
        <input type="password" placeholder="Password" className="border p-2 mb-2" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">登入</button>
      </form>
    </div>
  );
}
