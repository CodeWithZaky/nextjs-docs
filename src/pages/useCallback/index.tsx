import { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // Tidak akan berubah kecuali ada perubahan pada dependency (kosong berarti tidak pernah berubah)

  return (
    <div className="flex flex-col gap-5">
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}
