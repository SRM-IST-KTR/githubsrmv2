import React from 'react'

function ContactForm() {
  return (
    <>
    <div className="Qform my-10  bg-event_gray flex flex-col border-2 border-bright_green mx-60 shadow-lg hover:shadow-bright_green rounded-lg" >
     <p className='text-4xl font-bold mt-8 ml-8 text-wht'>Send Us Your Queries</p>
     <input type="text" placeholder='Name' className=' border-b-2 border-gray text-white bg-event_gray ml-8 text-lg mt-10 mr-96 '/>
     <input type="email" placeholder='Email Id' className=' border-b-2 border-gray text-white bg-event_gray ml-8 text-lg mt-10 mr-96'/>
     <input type="text" placeholder='Query' className=' border-b-2  border-gray text-white bg-event_gray ml-8 text-lg mt-10 mr-10'/>
     <button className='bg-bright_green text-blk font-semibold h-8 rounded-2xl mx-8 my-6 mt-10 mb-10'>Submit</button>
    </div>
    </>
 
  )
}

export default ContactForm