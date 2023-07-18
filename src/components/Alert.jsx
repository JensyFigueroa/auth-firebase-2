import React from 'react'

export const Alert = ({ message }) => {
  return (
    <div>
      {message === 'We sent an email a link to reset your password' ?
        <div className='bg-green-100 border border-green-400 rounded relative mb-2 text-center'>
          <span className='text-green-500' style={{ fontStyle: 'italic', fontSize: '16px' }}>{message}</span>
        </div> :
        <div className='bg-red-100 border border-red-400 rounded relative mb-2 text-center'>
          <span className='text-red-500' style={{ fontStyle: 'italic', fontSize: '16px' }}>{message}</span>
        </div>}

    </div>

  )
}
