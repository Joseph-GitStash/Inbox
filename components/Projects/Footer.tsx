import React from 'react'

const Footer = () => {
  return (
    <section className="pt-[5rem] pb-3 ">
        <div className="py-24 w-full text-center text-white">
            <div className="container">
                
                <p className='text-xl md:text-2xl tracking-tight md:tracking-tight text-center'>
                    <span className='text-[#007aff] inline'>
                        MessageMe{" "}
                    </span>
                    -{" "}
                    <span className="">
                        Because are you really texting if it's not{" "}
                        <span className="text-[#007aff]">
                            MessageMe
                        </span>
                    </span>
                </p>
                <p className="text-xl py-4 md:text-2xl tracking-tight md:tracking-tight text-center">
                    SephDesigns &copy;2025  
                </p>

            </div>
        </div>
    </section>
  )
}

export default Footer