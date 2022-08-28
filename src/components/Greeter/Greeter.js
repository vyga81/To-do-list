import Button from '../Button/Button';
import React, { useState } from 'react';
import './Greeter.css';



const Greeter = () => {
  const [name, setName] = useState("");
  const [showGreeting, setShowGreeting] = useState(false);


  // import image from '../../Images/nightcity2.jpg';
  //   style = {{
  //     backgroundImage: `url(${image})`, alt: 'jpg', backgroundSize: 'cover',
  //       backgroundRepeat: 'no-repeat',
  //     }
  // }

  return (
    <div className="night-city-img " >
      <div className='greeter-center  '>
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

        <label className='shadow-none p-3 mb-5 bg- rounded ' style={{ display: "block", color: 'yellow', fontSize: '60px' }}>
          {showGreeting ? `Hi ${name}` : ``}
        </label>
      </div>
    </div>
  )
};

export default Greeter;



// {/* <button
//         style={{ display: "block" }}
//         onClick={() => name.length > 0 ? setShowGreeting(!showGreeting) : null }
//       >
//         {showGreeting ? "Hide" : "Show" }
//       </button> */}

