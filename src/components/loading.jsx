import React from 'react';
import FadeLoader from "react-spinners/FadeLoader";

const Loading = () => {
  return (
    <div className='h-screen w-full grid place-items-center'>
        <FadeLoader
            color='#23b2e7'
        />
    </div>
  )
}

export default Loading ;