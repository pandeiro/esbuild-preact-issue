import { render } from 'preact';
import { useState } from 'preact/hooks';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div class="counter-container">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input readonly value={count} />
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

render(<Counter />, document.getElementById('target'));
