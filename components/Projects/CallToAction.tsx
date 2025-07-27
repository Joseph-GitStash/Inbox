import React from 'react'
import { Marquee } from '../magicui/marquee'

const CallToAction = () => {
  return (
    <section className="py-24">
        <div className="p-4 flex flex-col">
            <h2 className="tracking-tight mx-auto max-w-[960px] text-[#B7AB98] text-5xl">Updates coming soon</h2>
            <p className='tracking-tight mx-auto max-w-[960px] text-[#B7AB98] text-5xl'>More features to be added</p>
            <div className="hidden flex-none gap-16 tracking-tight mx-auto max-w-[960px] text-[#B7AB98] text-5xl overflow-hidden">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div className="flex flex-col">
                        <Marquee key={i}>
                        <div className='flex flex-row items-center gap-6'>
                            <span className=""></span>
                            <span className="">
                                <span className=" text-[#B7AB98]">
                                    Updates
                                </span>{" "}
                                <span className="text-white">
                                    coming soon
                                </span>
                            </span>
                        </div>
                        </Marquee>

                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default CallToAction