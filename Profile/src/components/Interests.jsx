import React from 'react'

const Interests = ({interest}) => {
  return (
    
    <div key="1" className="rounded overflow-hidden shadow-lg bg-white transition duration-300 transform hover:scale-105 max-w-md">
    <div className="flex items-center h-24 px-4 py-2"> {/* Adjusted padding */}
      <div className="w-3/4 pr-4"> {/* Set width to 75% of the container */}
        <div className="font-bold  text-xl mb-2">{interest.name}</div>
      </div>
      <div className="w-1/3">
        <img src={`icons/interests/${interest.icon}`} alt={interest.name} className="h-full w-full object-cover" />
      </div>
    </div>
  </div>
  )
}

export default Interests