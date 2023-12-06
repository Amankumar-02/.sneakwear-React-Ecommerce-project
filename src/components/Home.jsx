import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Home() {
  return (
    <>
    <div className="slider bg-[url(https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)]" 
    style={{clipPath: `polygon(0 0, 100% 0%, 100% 100%, 0 85%)`, height:`calc(100vh - 130px)`}}
    >
      <div className="sliderWrapper flex">
        <div className="sliderItem relative w-full flex items-center justify-center">
          <img src="https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/e3467ff9-70f0-4027-bbce-6db7a5c7b1ee/variations/Default_create_nike_air_force_shoe_in_black_1_e3467ff9-70f0-4027-bbce-6db7a5c7b1ee_0.png" alt="slide1" className='absolute top-0 object-cover w-[200px]'/>
          <div className="slideBg absolute w-[300px] h-[300px] rounded-[50%] bg-red-500 -z-10 top-0"></div>
          <h1 className='sliderTitle absolute text-white top-[10%] right-[10%] text-center text-[2em] font-black'>Air Force <br /> New <br /> Season</h1>
          <p className="slidePrice absolute text-white top-[10%] left-[10%] text-center text-[5vw]">$119
          <div className='priceProgressBar'></div>
          </p>
          <button className="buyButton absolute text-white top-[33%] right-[10%] text-center text-[30px] font-black border border-gray-500 cursor-pointer bg-black py-1 px-2 ">Buy Now!</button>
        </div>
        {/* <div className="sliderItem w-full flex items-center justify-center">
          <img src="https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/150a3d2b-9372-4997-8641-b92e2c8152f3/variations/Default_blue_nike_sneaker_2_150a3d2b-9372-4997-8641-b92e2c8152f3_0.png" alt="slide2" />
          <div className="slideBg"></div>
          <h1 className='sliderTitle'>Air Force <br /> New <br /> Season</h1>
          <h2 className="slidePrice">$119</h2>
          <button className="buyButton">Buy Now!</button>
        </div>
        <div className="sliderItem w-full flex items-center justify-center">
          <img src="https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/479182a9-ff0e-4bf6-814d-0aca04cd0706/variations/Default_green_air_jordan_sneaker_3_479182a9-ff0e-4bf6-814d-0aca04cd0706_0.png" alt="slide3" />
          <div className="slideBg"></div>
          <h1 className='sliderTitle'>Air Force <br /> New <br /> Season</h1>
          <h2 className="slidePrice">$119</h2>
          <button className="buyButton">Buy Now!</button>
        </div> */}
      </div>
    </div>
    </>
  )
}

export default Home