import React from 'react'
import 'remixicon/fonts/remixicon.css'
import slide4 from '../img/slide4a.png'
import { useSelector } from 'react-redux'

function Home() {
  const slideData = [
    {img:"https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/e3467ff9-70f0-4027-bbce-6db7a5c7b1ee/variations/Default_create_nike_air_force_shoe_in_black_1_e3467ff9-70f0-4027-bbce-6db7a5c7b1ee_0.png", color:"bg-red-500", text:"text-red-500"},
    {img:"https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/1cf3721e-8eb6-4a6d-bbea-75d1af8ae239/variations/Default_create_high_quality_image_with_air_jordan_shoe_in_yell_2_1cf3721e-8eb6-4a6d-bbea-75d1af8ae239_0.png", color:"bg-yellow-500", text:"text-yellow-500"},
    {img:"https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/5e134d85-5475-41c2-bc7f-b651e3185e2f/variations/Default_nike_air_jordan_blue_sneaker_0_5e134d85-5475-41c2-bc7f-b651e3185e2f_0.png", color:"bg-blue-500", text:"text-blue-500"},
    {img:"https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/3810e149-a135-4289-9f34-505af9ad68a1/variations/Default_create_nike_air_jordan_shoe_in_black_2_3810e149-a135-4289-9f34-505af9ad68a1_0.png", color:"bg-gray-500", text:"text-gray-500"},
    {img:"https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/479182a9-ff0e-4bf6-814d-0aca04cd0706/variations/Default_green_air_jordan_sneaker_3_479182a9-ff0e-4bf6-814d-0aca04cd0706_0.png", color:"bg-green-500", text:"text-green-500"},
  ]
  const featureData = [
    {img:"https://img.icons8.com/?size=200&id=8290&format=png&color=EF4444", img2:"https://img.icons8.com/wired/200/EF4444/free-shipping.png", title:"Free Shipping", desc:"Free Worldwide Shipping On All Orders."},
    {img:"https://img.icons8.com/?size=200&id=UhclbL6j7ysE&format=png&color=EF4444", img2:"https://img.icons8.com/wired/200/EF4444/return-purchase.png", title:"30 Days Return", desc:"Easy Refund In 14 Days"},
    {img:"https://img.icons8.com/?size=200&id=36069&format=png&color=EF4444", img2:"https://img.icons8.com/external-icongeek26-outline-icongeek26/200/EF4444/external-Gift-Card-e-commerce-icongeek26-outline-icongeek26.png", title:"Gift Cards", desc:"Buy Gifts Card And Use Coupon Code Easily"},
    {img:"https://img.icons8.com/?size=200&id=t1QhJ1rCvYZA&format=png&color=EF4444", img2:"https://img.icons8.com/wired/200/EF4444/paper-plane.png", title:"Contact Us", desc:"Keep In Touch Via Email And Support System."},
  ]
  const productData = [
    {
      img1:"https://cdn.leonardo.ai/users/8d611489-0d5f-4751-a2ec-062c4b782ea8/generations/f6237ddb-744b-4255-8f04-bf20a0ac1bd2/variations/Default_nike_air_jordan_shoes_3_f6237ddb-744b-4255-8f04-bf20a0ac1bd2_0.png",
      img2:"https://cdn.leonardo.ai/users/9e51583c-3ad7-46cd-8cb1-d09fc26ccdbf/generations/240bf4c6-d397-4ab2-b990-d0c8086947ce/variations/Default_air_jordan_0_240bf4c6-d397-4ab2-b990-d0c8086947ce_0.png",
      title:"",
      price:"",
      desc:"",
      color:"",
    },
    {
      img1:"https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/fb5734ff-020c-4a8d-8407-52da9fea1af7/variations/Default_nike_air_jordan_orange_sneaker_2_fb5734ff-020c-4a8d-8407-52da9fea1af7_0.png",
      img2:"https://cdn.leonardo.ai/users/8d611489-0d5f-4751-a2ec-062c4b782ea8/generations/9a2b1093-22da-443e-8831-afca5e3fb0d5/variations/Default_nike_air_jordan_shoes_1_9a2b1093-22da-443e-8831-afca5e3fb0d5_0.png",
      title:"",
      price:"",
      desc:"",
      color:"",
    },
    {
      img1:"https://cdn.leonardo.ai/users/9e51583c-3ad7-46cd-8cb1-d09fc26ccdbf/generations/a1b280f1-8dfd-4201-88fe-07ac1cc8aba7/variations/Default_Nike_Shoes_3_a1b280f1-8dfd-4201-88fe-07ac1cc8aba7_0.png",
      img2:"https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/d06f89d4-7fee-4f7c-b49b-656ed964069a/variations/Default_create_high_quality_image_with_nike_shoe_3_d06f89d4-7fee-4f7c-b49b-656ed964069a_0.png",
      title:"",
      price:"",
      desc:"",
      color:"",
    },
    {
      img1:"https://cdn.leonardo.ai/users/9e51583c-3ad7-46cd-8cb1-d09fc26ccdbf/generations/b6a4dc15-0862-4f73-bf3b-206662d203aa/variations/Default_air_jordan_2_b6a4dc15-0862-4f73-bf3b-206662d203aa_0.png",
      img2:"https://cdn.leonardo.ai/users/36eaba97-5f1a-4a31-a92a-b2ea8256702f/generations/cf883e79-4fa3-4313-aba8-d178a058ca42/variations/Default_nike_air_jordan_gray_sneaker_0_cf883e79-4fa3-4313-aba8-d178a058ca42_0.png",
      title:"",
      price:"",
      desc:"",
      color:"",
    },
    {
      img1:"https://cdn.leonardo.ai/users/8d611489-0d5f-4751-a2ec-062c4b782ea8/generations/54a1cb9a-9528-4a5d-a389-c24494b0fdb9/variations/Default_nike_sneakers_1_54a1cb9a-9528-4a5d-a389-c24494b0fdb9_0.png",
      img2:"https://cdn.leonardo.ai/users/8d611489-0d5f-4751-a2ec-062c4b782ea8/generations/bcabdefd-bdf8-4523-a45d-cc2426d529c9/variations/Default_nike_sneakers_2_bcabdefd-bdf8-4523-a45d-cc2426d529c9_0.png",
      title:"",
      price:"",
      desc:"",
      color:"",
    },
  ]
  const storeData = useSelector(state=>state.slider);
  return (
    <>
    <div 
    className="slider bg-[url(https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)] bg-cover bg-center bg-no-repeat w-full overflow-hidden"
    >
      <div className={`sliderWrapper flex w-[500vw]`} style={storeData}>
        {slideData.map((data, index)=>(
          <div key={index} className="sliderItem relative flex items-center justify-center w-full h-[240px] sm:h-[500px]">
          <img src={data.img} alt="slide1" className='absolute 
          sm:top-[-10px]
          h-[84%]
          sm:h-[80vh]
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
      </div>
    </div>
    <div 
    className="features flex items-start justify-between p-[10px] sm:p-[50px]">
      {featureData.map((data, index)=>(
      <div key={index} className="feature flex flex-col items-center text-center sm:w-[20vw]">
        {/* <img src={data.img} alt="" className='h-[60%] sm:h-[45%] w-[60%] sm:w-[45%] cursor-pointer' /> */}
        <img src={data.img2} alt="free-shipping" className='h-[60%] sm:h-[45%] w-[60%] sm:w-[45%] cursor-pointer'/>
        <span className="featureTitle font-semibold text-[10px] sm:text-[17px] pt-1 uppercase">{data.title}</span>
        <span className="featureDesc text-[8px] sm:text-[15px] w-[80%] sm:w-[50%] text-gray-500">{data.desc}</span>
      </div>
      ))}
    </div>
    <div className="products w-full overflow-hidden">
      <div className="productWrapper flex w-[500vw]" style={storeData}>
        {productData.map((data, index)=>(
          <div
          key={index}
          className="product w-full">
            <img src={data.img1} alt="product1" className='w-[48%] absolute top-[18px] left-[2%] rotate-[12deg]' />
            <div className="productDetails absolute top-[2%] right-[2%] w-[40%] p-[50px]">
              <h1 className=" productTitle text-[20px] sm:text-[60px] font-bold text-white tracking-[-2px] leading-[1]">Air Force</h1>
              <h2 className="productPrice text-white text-[30px] mt-[10px]">$199</h2>
              <p className='productDesc text-[16px] text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illum ad earum necessitatibus quidem. Dolorum tempore earum exercitationem sunt sed natus, cupiditate iusto fugiat quasi inventore, quod vitae alias eum.</p>
            </div>
            <div className="colors absolute bottom-[38%] right-[33%] flex">
              <div className="color bg-[#fff] h-[30px] w-[30px] rounded-md me-[10px] cursor-pointer hover:border-[2px] hover:border-black"></div>
              <div className="color bg-[#0000ff] h-[30px] w-[30px] rounded-md cursor-pointer hover:border-[2px] hover:border-black"></div>
            </div>
            <div className="sizes absolute bottom-[26%] right-[23%] flex">
              <div className="size text-[20px] text-white border me-4 border-white rounded-md cursor-pointer py-[0.5vw] px-[1vw] hover:border-[2px] hover:border-black">42</div>
              <div className="size text-[20px] text-white border me-4 border-white rounded-md cursor-pointer py-[0.5vw] px-[1vw] hover:border-[2px] hover:border-black">43</div>
              <div className="size text-[20px] text-white border me-4 border-white rounded-md cursor-pointer py-[0.5vw] px-[1vw] hover:border-[2px] hover:border-black">44</div>
            </div>
            <button className="productButton cursor-pointer bg-black text-white text-[18px] rounded-lg py-1 sm:py-2 px-1 sm:px-4 border border-gray-300 absolute bottom-[14%] right-[30%] hover:text-black hover:bg-white hover:font-semibold">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
    {/* <div 
    className="product">
      <img src={productData[0].img1} alt="product1" className='w-[50%] absolute top-[-4%] left-[2%] rotate-[12deg]' />
      <div className="productDetails absolute top-[2%] right-0 w-[40%] p-[50px]">
        <h1 className=" productTitle text-[20px] sm:text-[70px] font-bold text-white tracking-[-2px]">Air Force</h1>
        <h2 className="productPrice text-white text-[30px] my-[10px]">$199</h2>
        <p className='productDesc text-[18px] text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illum ad earum necessitatibus quidem. Dolorum tempore earum exercitationem sunt sed natus, cupiditate iusto fugiat quasi inventore, quod vitae alias eum.</p>
      </div>
      <div className="colors absolute bottom-[34%] right-[31%] flex">
        <div className="color bg-[#fff] h-[30px] w-[30px] rounded-md me-[10px] cursor-pointer hover:border-[2px] hover:border-black"></div>
        <div className="color bg-[#0000ff] h-[30px] w-[30px] rounded-md cursor-pointer hover:border-[2px] hover:border-black"></div>
      </div>
      <div className="sizes absolute bottom-[24%] right-[21%] flex">
        <div className="size text-[20px] text-white border me-4 border-white rounded-md cursor-pointer py-[0.5vw] px-[1vw] hover:border-[2px] hover:border-black">42</div>
        <div className="size text-[20px] text-white border me-4 border-white rounded-md cursor-pointer py-[0.5vw] px-[1vw] hover:border-[2px] hover:border-black">43</div>
        <div className="size text-[20px] text-white border me-4 border-white rounded-md cursor-pointer py-[0.5vw] px-[1vw] hover:border-[2px] hover:border-black">44</div>
      </div>
      <button className="productButton cursor-pointer bg-black text-white text-[18px] rounded-lg py-1 sm:py-2 px-1 sm:px-4 border border-gray-300 absolute bottom-[14%] right-[28%] hover:text-black hover:bg-white hover:font-semibold">Buy Now</button>
    </div> */}
    </>
  )
}

export default Home