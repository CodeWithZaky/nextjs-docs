import { memo } from "react";

const ChildComponent = memo(({ onClick }: { onClick: () => void }) => {
  console.log("Child component rendered");
  return <button onClick={onClick}>Click me</button>;
});

export default ChildComponent;
