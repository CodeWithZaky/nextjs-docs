import localFont from "next/font/local";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-screen font-semibold text-xl">
      <button className="bg-slate-700 hover:bg-slate-800 px-3 py-1 rounded-xl">
        <Link href="useCallback">useCallback</Link>
      </button>
    </div>
  );
}
