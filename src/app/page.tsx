import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Home Page</h1>
      <button>
        <Link href="/about">About</Link>
      </button>
    </>
  );
}
