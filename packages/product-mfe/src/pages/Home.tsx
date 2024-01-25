import { useState } from 'react';


export function Home() {
  const [count,setCount] = useState(0);

  return (
    <div>
      Store
      <button
        onClick={() => {
          setCount(count => count + 1)
        }}
      >
        Click here to add count
      </button>
      <div>{count}</div>
    </div>
  );

}
