import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0F1419] text-white px-6 text-center">
      <h2 className="font-poppins text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-white/80 mb-8">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-md bg-[#C6F432] text-[#0F1419] font-semibold hover:bg-[#b5e328] transition-all"
      >
        Return Home
      </Link>
    </div>
  );
}
