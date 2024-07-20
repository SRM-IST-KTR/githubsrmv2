import React from 'react'

function ContactForm() {
  return (
    <>
    <div className="main1 bg-event_gray  py-6
                    lg:py-20
                    sm:py-10">
         <div className="Qform my-10 bg-event_gray text-white flex flex-col shadow-lg hover:shadow-bright_green 
                         border-[1px] border-bright_green mx-10 rounded-xl 
                         lg:my-10 lg:mx-60 lg:border-2 lg:border-bright_green lg:rounded-lg
                         sm:mx-32 sm:border-[1px] sm:border-bright_green sm:rounded-2xl">
            <p className='text-white
                          text-2xl font-bold text-center mt-3
                          lg:text-4xl  lg:font-bold  lg:mt-8  lg:ml-8
                          sm:text-3xl sm:font-bold sm:text-center sm:mt-6 '>
                          Send Us Your Queries
            </p>
            <input type="text" placeholder='Name'
                   className=' border-b-2 border-gray text-white bg-event_gray
                               text-md mt-4 mx-20 mb-2
                               
                               lg:ml-8 lg:text-lg lg:mt-10 lg:mr-96
                               sm:mx-20 sm:text-md sm:mt-6 sm:mb-3'
            />
            <input type="email" placeholder='Email Id' 
                   className=' border-b-2 border-gray text-white bg-event_gray
                               lg:ml-8 lg:text-lg lg:mt-10 lg:mr-96
                               text-md mt-4 mx-20 mb-2
                               sm:mx-20 sm:text-md sm:mt-6 sm:mb-3'
            />
            <input type="text" placeholder='Query' 
                   className=' border-b-2  border-gray text-white bg-event_gray
                               lg:ml-8 lg:text-lg lg:mt-10 lg:mr-10
                               text-md mt-4 mx-20 mb-2
                               sm:mx-20 sm:text-md sm:mt-6 sm:mb-3'
            />
            <button className='text-black bg-bright_green
                               font-semibold rounded-3xl my-6 mx-36
                               lg:font-semibold lg:h-8 lg:rounded-2xl lg:mx-8 lg:my-6 lg:mt-10 lg:mb-10
                               sm:font-semibold sm:rounded-3xl sm:my-6  sm:h-7 sm:mx-36 sm:mb-3'>
                                Submit
            </button>
         </div>
    </div>
    </>

  )
}

export default ContactForm