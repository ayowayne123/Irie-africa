import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="space-y-4">
        <Link
          href="/menu"
          className="px-4 py-2 text-white bg-blue-500 rounded shadow hover:bg-blue-600"
        >
          View Menu
        </Link>
        <Link
          href="/review"
          className="px-4 py-2 text-white bg-green-500 rounded shadow hover:bg-green-600"
        >
          Leave a Review
        </Link>
      </div>
    </div>
  );
}
