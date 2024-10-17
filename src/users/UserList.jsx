import React from 'react'
import { MdDelete } from "react-icons/md";

export default function UserList({userInfo}) {

  let {userData,setuserData}=userInfo


  function deleteRow(cureentIndex){
   let filterData=userData.filter((v,i)=>i!==cureentIndex)
   setuserData(filterData)
  }

  let userRow=userData.map((items,index)=>{
    return(
      <tr className=''>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {index+1}
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {items.uName}
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {items.uEmail}
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {items.uPhone}
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {items.uPassword}
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button onClick={()=>deleteRow(index)} className='flex justify-center text-white text-md bg-red-500 hover:bg-red-600 border border-gray-200 focus:ring-4 focus:outline-none shadow-md focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center '>
        <MdDelete className='text-[20px] text-left fa-regular fa-trash-can animate-bounce '/> 
        Delete
      </button>
    </td>
  </tr>
    )
  })


  return (
    <div className='py-[100px]'>
      <div className=' p-6 rounded shadow-2xl text-left'>
        <h2 className='text-2xl font-semibold leading-tight mb-5'>UserList</h2>
        <table className='min-w-full leading-normal '>
          <tr className=''>
            <th
              className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
              Sr.No.
            </th>
            <th
              className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
              Name
            </th>
            <th
              className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
              Email
            </th>
            <th
              className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
              Phone
            </th>
            <th
              className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
              Password
            </th>
            <th
              className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
              Delete
            </th>
          </tr>
         {
          userData.length >=1 ?
          userRow
          : 
          <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm' colSpan={5}>No User Found..</td>
          </tr>
         }
      </table>
    </div>
    </div>
  )
}
