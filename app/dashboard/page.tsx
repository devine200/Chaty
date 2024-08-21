import React from 'react'
import SideBar from './componenets/side-bar'
import SideViewHolder from './componenets/side-view-holder'

const page = () => {
  return (
    <div className='flex justify-start bg-gray-50'>
        <SideBar />
        <SideViewHolder />
        <div className="bg-blue">t</div>
    </div>
  )
}

export default page