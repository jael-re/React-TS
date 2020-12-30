import React, { useState } from "react";

const LikeButton: React.FC = () => {
  const [count, setCount] = useState(0);
  const [on, setOn] = useState(true);
  return (
    <div>
      <button onClick = { () => setCount(count+1)}>{count}👍</button>
      <button onClick = { () => setOn(!on)}>{on ? 'ON' : 'OFF'}</button>
    </div>
  );
}

export default LikeButton;