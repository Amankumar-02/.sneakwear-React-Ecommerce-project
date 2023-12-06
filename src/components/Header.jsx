import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Header() {
  return (
    <>
      <div className='bg-black text-white py-[20px] px-[50px]'>
        <div className="navTop flex flex-col sm:flex-row items-center justify-between">
          <div className="navItem">
            <h1 className='text-[1.5em] font-semibold'>.Sneakwear</h1>
          </div>
          <div className="navItem py-2 sm:py-0">
            <div className='flex items-center bg-gray-500 py-1 sm:py-2 px-2 sm:px-4 rounded-lg'>
              <input
                type="text"
                placeholder="search..."
                className="searchInput bg-transparent placeholder:text-sm placeholder:text-white outline-none"
                />
              <i className="ri-search-line"></i>
            </div>
          </div>
          <div id='progressBarText' className="navItem">
            <span id='navTop' className="limitedOffer text-[1em] sm:text-[1.3em] cursor-pointer">Limited Offer!</span>
            <div id='progressBar'></div>
          </div>
        </div>
        <div className="navBottom">

        </div>
      </div>
    </>
  );
}

export default Header