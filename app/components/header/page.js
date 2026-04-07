import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-gray-200 flex items-center justify-between h-16 w-full text-black p-4">
      <Link href="/" className="text-2xl">
        FakeStorEver
      </Link>
      <Link href="#" className="text-3xl">
        🛒
      </Link>
    </div>
  );
}
