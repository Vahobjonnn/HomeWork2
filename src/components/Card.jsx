import React from 'react'

const Card = ({group,telegram,students,qualifiers,date,journal,edit,branch}) => {
  return (
    <>
<div className='w-100 p-5 bg-white rounded-2xl'>
  <div className='flex justify-between'>
    <h1 className='font-black text-2xl'>{group}</h1>
    <p className='bg-green-500 text-white p-1 rounded-2xl mt-5'>{students}/14</p>
  </div>
  <p className='text-gray-600 text-[13px]'>{date}</p>
  <h2 className='bg-[#ccc8f8] text-[#7062eb] w-16.25 mt-2 mb-2'>{branch}</h2>
  <hr />

  <div className='flex justify-between mt-2'>
    <div>
       <p className='bg-[#e0afaf] text-red-500 p-1 rounded-2xl w-12.5 mb-2 flex justify-center items-center'>{qualifiers}/14</p>
      <p>Qualifiers</p>
    </div>
    <div>
      <p className='font-extrabold text-[18px]'>Mn,Tu,Wd,Th,Fr,Sa</p>
      <p className='font-medium text-[15px] text-gray-300'>4 months (16:00 - 18:00)</p>
    </div>
  </div>

  <div className='flex justify-between mt-5'>
    <div className='flex  justify-center items-center'><img className='w-5' src={journal} alt="" />Journal</div>
  <div className='flex'>
    <img className='w-7.5 mr-2 h-7.5' src={telegram} alt="" /><img className='w-7.5' src={edit} alt="" />
  </div>
  </div>
</div>
    </>
  )
}

export default Card