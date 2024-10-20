// KASUS 1
import { useRef } from "react";

export default function Counter() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log(countRef.current); // Nilai disimpan di 'countRef' tanpa memicu render ulang.
  };

  return (
    <div className="mx-auto pt-5 w-1/2">
      <button onClick={increment} className="px-3 py-1 border rounded-xl">
        Tambah {countRef.current}
      </button>
    </div>
  );
}

// KASUS 2
// import { useRef } from "react";

// export default function InputFocus() {
//   const inputRef = useRef<HTMLInputElement>(null);

//   const focusInput = () => {
//     if (inputRef.current) {
//       inputRef.current.focus(); // Mengakses elemen input langsung.
//     }
//   };

//   return (
//     <div className="flex flex-col gap-5 mx-auto mt-5 w-[50%]">
//       <input
//         ref={inputRef}
//         type="text"
//         className="px-3 rounded-lg text-black"
//       />
//       <button
//         onClick={focusInput}
//         className="bg-slate-700 px-3 py-1 rounded-xl w-fit"
//       >
//         Fokus Input
//       </button>
//     </div>
//   );
// }
