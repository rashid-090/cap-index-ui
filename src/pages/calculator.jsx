import React from 'react';
import {Calculator} from '../components'
import { Link } from 'react-router-dom';

const CalculatorPage = () => {
  return (
    <div className='pt-36'>
       <span className="w-11/12 2xl:w-10/12 mx-auto flex capitalize gap-1 text-base font-medium text-secclr pb-5">
        <Link to={"/"} className="font-bold hover:underline">
          home
        </Link>{" "}
        / <p>Calculator</p>
      </span>
      <Calculator/>
    </div>
  )
}

export default CalculatorPage