import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button 
        className='flex 
                    justify-center 
                    items-center 
                    gap-2 
                    px-7 py-4 
                    border 
                    border-coral-red
                    font-montserrat 
                    text-lg 
                    leading-none 
                    bg-coral-red
                    text-white
                    rounded-full
                    '>
        {label}
        <img 
            src={iconURL}
            alt='right-arrow'
            className='ml-2 rounded-full w-5 h-5' 
        />
    </button>
  )
}

export default Button