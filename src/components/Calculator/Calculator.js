import React from 'react';
import { useState } from 'react'
import './Calculator.css';

function Calculator() {
  const [Sum, setSum] = useState(0)
  const [Num1, setNum1] = useState(0)
  const [Num2, setNum2] = useState(0)

  const Delete = ('')

  return (
    <div className="calculator-bg" >

      <div className="calc-center "   >
        <div className='calcFrame'><input name='value1' type='text' onChange={(e) => { setNum1(e.target.value) }} /></div>
        <div className='calcFrame'><input name='value2' type='text' onChange={(e) => { setNum2(e.target.value) }} /></div>
        <div className='d-flex '>
          <div className='calcFrame '><button variant="contained" onClick={() => setSum(parseInt(Num1) + parseInt(Num2))}>+</button></div>
          <div className='calcFrame '><button variant="contained" onClick={() => setSum(parseInt(Num1) - parseInt(Num2))}>-</button></div>
          <div className='calcFrame '><button variant="contained" onClick={() => setSum(parseInt(Num1) / parseInt(Num2))}>/</button></div>
          <div className='calcFrame '><button variant="contained" onClick={() => setSum(parseInt(Num1) * parseInt(Num2))}>*</button></div>
        </div>
        <div className='totalFrame'><div >Total {Sum}</div></div>
        <div className='calcFrame '><button variant="contained" onClick={() => setSum(Delete)}>Delete</button></div>

      </div>

    </div>
  );
}

export default Calculator;
