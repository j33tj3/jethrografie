import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex w-screen justify-center bg-black px-4 py-10 text-white">
      <div className="w-full max-w-5xl">
        <Link href="/algemenevoorwaarden">Algemene voorwaarden</Link>
      </div>
    </footer>
  );
};
