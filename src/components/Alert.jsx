import React from 'react'

export const Alert = ({message}) => {
  return (
    <div className='bg-red-100 border border-red-400 rounded relative mb-2 text-center'>
        <span className='text-red-500' style={{ fontStyle: 'italic', fontSize: '16px' }}>{message}</span>
    </div>
  )
}
