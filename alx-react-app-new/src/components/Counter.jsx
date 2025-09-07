import { useState } from 'react';


export default function Counter() {
const [count, setCount] = useState(0);


return (
<div style={{
display: 'inline-flex',
flexDirection: 'column',
gap: 12,
padding: 16,
border: '1px solid #e5e7eb',
borderRadius: 12
}}>
<p style={{ fontSize: 18, margin: 0 }}>
Current Count: <strong>{count}</strong>
</p>
<div style={{ display: 'flex', gap: 8 }}>
<button onClick={() => setCount(c => c + 1)}>Increment</button>
<button onClick={() => setCount(c => c - 1)} disabled={count <= 0}>Decrement</button>
<button onClick={() => setCount(0)}>Reset</button>
</div>
</div>
);
}
