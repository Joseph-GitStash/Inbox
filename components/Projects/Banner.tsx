import React from 'react'

const Banner = () => {
  return (
    <div className="z-50 py-3  mb-[23rem] fixed top-0 left-0 right-0 w-full text-center bg-[#007aff] text-white">
        <div className="container">
            
            <p className='text-lg md:text-xl tracking-tight md:tracking-tight text-center'>
                <span className='hidden sm:inline'>
                    A completely different experience -{" "}
                </span>
                <a href="" className="underline underline-offset-4">
                    Updates coming soon.
                </a>
            </p>
        </div>
    </div>
  )
}

export default Banner