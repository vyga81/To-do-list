import React from 'react';
import { useState } from 'react'
import './Calculator.css';
import image from '../../Images/ferrari.jpg'
function Calculator() {

  const [Num1, setNum1] = useState(0)
  const [Num2, setNum2] = useState(0)
  const [Sum, setSum] = useState(0)

  return (
    <div >
      <img src={image} className="calcbg-ferrari-img" alt='jpg' />
      <div className="calc-center"   >
        <div className='calcFrame'><input name='value1' type='text' onChange={(e) => { setNum1(e.target.value) }} /></div>
        <div className='calcFrame'><input name='value2' type='text' onChange={(e) => { setNum2(e.target.value) }} /></div>
        <div className='calcFrame'><button variant="contained" onClick={() => setSum(parseInt(Num1) + parseInt(Num2))}>+</button></div>
        <div className='totalFrame'><h5 >Total {Sum}</h5></div>
      </div>

    </div>
  );
}

export default Calculator;
