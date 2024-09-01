import React from 'react'

const MainBody = ({children}) => {
  return (
    <div className='lg:grid grid-cols-2 gap-2 place-content-center '>
        {children}
      </div>
  )
}

export default MainBody