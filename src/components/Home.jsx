import React from 'react'
import 'remixicon/fonts/remixicon.css'
import slide4 from '../img/slide4a.png'
import { useSelector } from 'react-redux'

function Home() {
  const slideData = [
    {img:"https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/e3467ff9-70f0-4027-bbce-6db7a5c7b1ee/variations/Default_create_nike_air_force_shoe_in_black_1_e3467ff9-70f0-4027-bbce-6db7a5c7b1ee_0.png", color:"bg-red-500", text:"text-red-500"},
    {img:"https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/1cf3721e-8eb6-4a6d-bbea-75d1af8ae239/variations/Default_create_high_quality_image_with_air_jordan_shoe_in_yell_2_1cf3721e-8eb6-4a6d-bbea-75d1af8ae239_0.png", color:"bg-yellow-500", text:"text-yellow-500"},
    {img:"https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/3810e149-a135-4289-9f34-505af9ad68a1/variations/Default_create_nike_air_jordan_shoe_in_black_2_3810e149-a135-4289-9f34-505af9ad68a1_0.png", color:"bg-gray-500", text:"text-gray-500"},
    {img:slide4, color:"bg-blue-500", text:"text-blue-500"},
    {img:"https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/479182a9-ff0e-4bf6-814d-0aca04cd0706/variations/Default_green_air_jordan_sneaker_3_479182a9-ff0e-4bf6-814d-0aca04cd0706_0.png", color:"bg-green-500", text:"text-green-500"},
  ]
  const storeData = useSelector(state=>state.slider.transform);
  console.log(storeData)
  return (
    <>
    <div className="slider bg-[url(https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)] bg-cover bg-center bg-no-repeat w-full overflow-hidden"
    >
      <div className={`sliderWrapper flex w-[500vw] ${storeData}`}>
        {slideData.map((data, index)=>(
          <div key={index} className="sliderItem relative flex items-center justify-center w-full h-[240px] sm:h-[500px]">
          <img src={data.img} alt="slide1" className='absolute 
          sm:top-[-10px]
          sm:h-[500px] 
          sm:h-[80vh] 
          sm:h-[100%]
          h-[85%]
          rotate-[10deg]
          z-[999]
          '/> 
          <div className={`slideBg absolute w-[220px] sm:w-[500px] h-[220px] sm:h-[500px] rounded-[50%] ${data.color} z-1 top-[10px] sm:top-[-2px] left-[50%] translate-x-[-50%]`}></div>
          <h1 className='sliderTitle absolute text-white top-[12%] sm:top-[30%] left-[8%] sm:left-[76%] sm:text-center text-[18spx] sm:text-[40px] leading-[1.2] font-black'>Air Force <br /> New <br /> Season</h1>
          <div className={`slidePrice absolute ${data.text} top-[40%] left-[8%] sm:left-[10%] text-center text-[5vw]`}>
          <p>$119</p>
          <div className={`priceProgressBar bg-gray-300 h-[2px] sm:h-[4px] mt-[-4px] sm:mt-[-14px]`}></div>
          </div>
          <button className="buyButton absolute text-white top-[70%] sm:top-[65%] right-[4%] sm:right-[10%] text-center text-xs sm:text-[28px] font-black border border-gray-500 cursor-pointer bg-black py-1 sm:py-4 px-1 sm:px-4 hover:text-black hover:bg-white rounded-lg">Buy Now!</button>
        </div>
        ))}
        {/* <div className="sliderItem relative flex items-center justify-center w-full h-[240px] sm:h-[500px]">
          <img src={slideData[4].img} alt="slide1" className='absolute 
          sm:top-[-10px]
          sm:h-[500px] 
          sm:h-[80vh] 
          sm:h-[100%]
          h-[85%]
          rotate-[10deg]
          '/> 
          <div className={`slideBg absolute w-[220px] sm:w-[500px] h-[220px] sm:h-[500px] rounded-[50%] ${slideData[4].color} -z-10 top-[10px] sm:top-[-2px] left-[50%] translate-x-[-50%]`}></div>
          <h1 className='sliderTitle absolute text-white top-[12%] sm:top-[30%] left-[8%] sm:left-[76%] sm:text-center text-[18spx] sm:text-[40px] leading-[1.2] font-black'>Air Force <br /> New <br /> Season</h1>
          <p className="slidePrice absolute text-white top-[40%] left-[8%] sm:left-[10%] text-center text-[5vw]">$119
          <div className={`priceProgressBar ${slideData[4].color} h-[2px] sm:h-[4px] mt-[-4px] sm:mt-[-14px]`}></div>
          </p>
          <button className="buyButton absolute text-white top-[70%] sm:top-[65%] right-[4%] sm:right-[10%] text-center text-xs sm:text-[28px] font-black border border-gray-500 cursor-pointer bg-black py-1 sm:py-4 px-1 sm:px-4 hover:text-black hover:bg-white rounded-lg">Buy Now!</button>
        </div> */}
      </div>
    </div>
    <h1>next</h1>
    </>
  )
}

export default Home