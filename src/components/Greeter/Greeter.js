import Button from '../Button/Button';
import React, { useState } from 'react';
import './Greeter.css';


const Greeter = () => {
  const [name, setName] = useState("");
  const [showGreeting, setShowGreeting] = useState(false);

  return (
    <>
      <input
        style={{ display: "block" }}
        placeholder="What's your name?"
        onChange={(e) => setName(e.target.value)}
      />


      <Button
        color={showGreeting ? (name.length > 0 ? `red` : `green`) : `blue`}
        text={showGreeting ? `Hide` : `Show`}
        parentCallback={() => (name.length > 0 ? setShowGreeting(!showGreeting) : null)}
      />

      <label style={{ display: "block" }}>
        {showGreeting ? `Hi ${name}` : ``}
      </label>
    </>
  )
};

export default Greeter;



// {/* <button
//         style={{ display: "block" }}
//         onClick={() => name.length > 0 ? setShowGreeting(!showGreeting) : null }
//       >
//         {showGreeting ? "Hide" : "Show" }
//       </button> */}

