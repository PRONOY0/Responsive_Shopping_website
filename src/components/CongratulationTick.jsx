import React from 'react'
import Lottie from 'lottie-react'
import congratulationAnimation from '../congratulation.json'
import './mobileStyle.css'


const CongratulationTick = () => {

  return (
    <div className='flex flex-row justify-center items-center w-screen h-screen'>
      <div className='flex flex-col justify-center items-center'>
        <Lottie animationData={congratulationAnimation} className='w-[500px]'/>
        <h1 className='font-[roboto] text-4xl text-[#1f1f1f] font-semibold'>30% discount applied successfully. Happy shopping!</h1>
      </div>
    </div>
  )
}

export default CongratulationTick
