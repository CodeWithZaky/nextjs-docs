import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  const LINK_DATA = ["useCallback", "useRef"];

  return (
    <div className="flex justify-center items-center gap-5 w-full h-screen font-semibold text-xl">
      {LINK_DATA.map((item, index) => (
        <Fragment key={index}>
          <button className="bg-slate-700 hover:bg-slate-800 px-3 py-1 rounded-xl">
            <Link href={item}>{item}</Link>
          </button>
        </Fragment>
      ))}
    </div>
  );
}
