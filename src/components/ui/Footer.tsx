import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex w-screen justify-center bg-black px-4 py-10 text-white dark:bg-white dark:text-black">
      <div className="w-full max-w-5xl">
        <Link href="/algemenevoorwaarden" className="uppercase">
          Algemene voorwaarden
        </Link>
      </div>
    </footer>
  );
};
