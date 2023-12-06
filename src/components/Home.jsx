import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Home() {
  const slideData = [
    {img:"https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/e3467ff9-70f0-4027-bbce-6db7a5c7b1ee/variations/Default_create_nike_air_force_shoe_in_black_1_e3467ff9-70f0-4027-bbce-6db7a5c7b1ee_0.png", color:"red-500",},
    {img:"https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/1cf3721e-8eb6-4a6d-bbea-75d1af8ae239/variations/Default_create_high_quality_image_with_air_jordan_shoe_in_yell_2_1cf3721e-8eb6-4a6d-bbea-75d1af8ae239_0.png", color:"yellow-500",},
    {img:"https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/3810e149-a135-4289-9f34-505af9ad68a1/variations/Default_create_nike_air_jordan_shoe_in_black_2_3810e149-a135-4289-9f34-505af9ad68a1_0.png", color:"gray-500",},
    {img:"https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/150a3d2b-9372-4997-8641-b92e2c8152f3/variations/Default_blue_nike_sneaker_2_150a3d2b-9372-4997-8641-b92e2c8152f3_0.png", color:"blue-500",},
    {img:"https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/479182a9-ff0e-4bf6-814d-0aca04cd0706/variations/Default_green_air_jordan_sneaker_3_479182a9-ff0e-4bf6-814d-0aca04cd0706_0.png", color:"green-500",},
  ]
  return (
    <>
    <div className="slider bg-[url(https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)] bg-cover bg-center bg-no-repeat w-full" 
    style={{clipPath: `polygon(0 0, 100% 0%, 100% 100%, 0 85%)`,
    // height:`calc(100% - 108px)`
  }}
    >
      <div className="sliderWrapper flex">
        <div className="sliderItem relative flex items-center justify-center w-full h-[240px] sm:h-[500px]">
          <img src={slideData[0].img} alt="slide1" className='absolute 
          sm:top-[-10px]
          sm:h-[500px] 
          sm:h-[80vh] 
          sm:h-[100%]
          h-[85%]
          rotate-[10deg]
          '/> 
          <div className={`slideBg absolute w-[220px] sm:w-[500px] h-[220px] sm:h-[500px] rounded-[50%] bg-${slideData[0].color} -z-10 top-[10px] sm:top-[-2px] left-[50%] translate-x-[-50%]`}></div>
          <h1 className='sliderTitle absolute text-white top-[12%] sm:top-[30%] left-[8%] sm:left-[76%] sm:text-center text-[18spx] sm:text-[40px] leading-[1.2] font-black'>Air Force <br /> New <br /> Season</h1>
          <p className="slidePrice absolute text-white top-[40%] left-[8%] sm:left-[10%] text-center text-[5vw]">$119
          <div className={`priceProgressBar bg-${slideData[0].color} h-[2px] sm:h-[4px] mt-[-4px] sm:mt-[-14px]`}></div>
          </p>
          <button className="buyButton absolute text-white top-[70%] sm:top-[65%] right-[4%] sm:right-[10%] text-center text-xs sm:text-[28px] font-black border border-gray-500 cursor-pointer bg-black py-1 sm:py-4 px-1 sm:px-4">Buy Now!</button>
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
    <h1>next</h1>
    </>
  )
}

export default Home