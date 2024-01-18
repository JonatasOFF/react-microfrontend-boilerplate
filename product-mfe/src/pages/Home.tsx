import { useState } from 'react';
import useStoreMfe from 'store-mfe/store';

export function Home() {
  useStoreMfe
  const [count, setCount] = useState<number>(useStoreMfe.getState().count as number);

  return (
    <div>
      Store
      <button
        onClick={() => {
          useStoreMfe.getState().increment();
          setCount(useStoreMfe.getState().count as number);
        }}
      >
        Click here to add count
      </button>
      <div>{count}</div>
    </div>
  );

}
