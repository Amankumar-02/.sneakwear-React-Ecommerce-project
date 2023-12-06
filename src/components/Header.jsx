import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Header() {
  const menuItemsName = [
    {name:"Air Force",},
    {name:"Jordan",},
    {name:"Blazer",},
    {name:"Crater",},
    {name:"Hippie",},
]
  return (
    <>
      <div className="bg-black text-white pt-[20px] pb-[8px] px-[30px] sm:px-[40px] sticky top-0 left-0 z-50">
        <div className="navTop flex flex-col sm:flex-row items-center justify-between">
          <div className="navItem">
            <h1 className="text-[1.5em] font-semibold">.Sneakwear</h1>
          </div>
          <div className="navItem py-2 sm:py-0">
            <div className="flex items-center bg-[#808080] py-1 sm:py-2 px-2 sm:px-4 rounded-lg">
              <input
                type="text"
                placeholder="search..."
                className="searchInput bg-transparent cursor-pointer placeholder:text-sm placeholder:text-white outline-none"
              />
              <i className="ri-search-line"></i>
            </div>
          </div>
          <div id="progressBarText" className="navItem">
            <span
              id="navTop"
              className="limitedOffer text-[1em] sm:text-[1.3em] cursor-pointer"
            >
              Limited Offer!
            </span>
            <div id="progressBar"></div>
          </div>
        </div>
        <div className="navBottom flex items-center justify-center flex-wrap gap-[6px] mt-[20px]">
          {menuItemsName.map((data) => (
            <h3 className="menuItem uppercase text-sm sm:text-[1rem] w-[80px] sm:w-[130px] text-center cursor-pointer text-gray-300 ">
              {data.name}
            </h3>
          ))}
        </div>
      </div>
    </>
  );
}

export default Header