import React, { useState } from 'react';
import './Counter.css';

function Counter(props) {
  const [clicks, setClicks] = useState(0);
  const [message, setMessage] = useState(props.title);

  return (
    <div className="counter-box">
      <h2>{props.title}</h2>

      <p>You clicked the button {clicks} times.</p>

      <button onClick={() => setClicks(clicks + 1)}>
        Click Me
      </button>

      <div className="input-section">
        <label>Change the message:</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <p className="message-output">Current message: {message}</p>
    </div>
  );
}

export default Counter;