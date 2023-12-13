import React from 'react'
import 'remixicon/fonts/remixicon.css';

function Footer() {
  const footerData = [
    {title:"About Us", more:[
      {subTitle:"Company",},{subTitle:"Contact"},{subTitle:"Careers"},{subTitle:"Affiliates"},{subTitle:"Stores"},
    ]},
    {title:"Useful links", more:[
      {subTitle:"Support",},{subTitle:"Refund"},{subTitle:"Careers"},{subTitle:"FAQ"},{subTitle:"Stores"},
    ]},
    {title:"Products", more:[
      {subTitle:"AIR FORCE", color:"bg-red-500",},{subTitle:"AIR JORDAN", color:"bg-yellow-500",},{subTitle:"BLAZER", color:"bg-blue-500",},{subTitle:"CRATER", color:"bg-gray-500",},{subTitle:"HIPPIE", color:"bg-green-500",},
    ]},
  ]
  return (
    <>
    <div className="footer bg-gray-800 flex">
      <div className="footerLeft flex w-[65%] py-[20px] sm:py-[24px] px-[20px] sm:px-[50px] justify-between">
        {footerData.map((data, index)=>(
          <div key={index} className="footerMenu text-white">
            <h1 className="FMenuTitle text-[12px] sm:text-lg font-semibold text-center">{data.title}</h1>
            <ul className="fMenuList">
            {data.more.map((data2, index2)=>(
              <a key={index2} href="#">
              <li className='fListItem text-[10px] sm:text-sm text-gray-400 text-center'>{data2.subTitle}
              <div id="footerProgressBar" 
              className={`${data2.color}`}
              ></div>
              </li>
              </a>
              ))}
              </ul>
          </div>
        ))}
      </div>
      <div className="footerRight w-[35%] h-full py-[24px] bg-green-400 sm:bg-green-500 flex flex-col justify-between items-center">
        <div className="footerRightMenu">
          <h1 className="fMenuTitle text-lg -tracking-tighter">Subscribe to our newsletter</h1>
          <div className="fMenuMail">
            <input type="text" placeholder='your@email.com' className='p-[5px] outline-none'/>
            <button className='fMenuButton ms-1 p-[5px] bg-black text-white hover:border hover:border-black hover:text-black hover:bg-transparent hover:font-semibold'>Join !</button>
          </div>
        </div>
        <div className="footerRightMenu flex my-5">
          <h1 className="fMenuTitle text-xl">Follow Us</h1>
          <div className="fIcons ms-[30px]">
          <i className="ri-facebook-circle-line me-2 text-2xl cursor-pointer hover:text-[28px]"></i>
          <i className="ri-twitter-x-line me-2 text-2xl cursor-pointer hover:text-[28px]"></i>
          <i className="ri-instagram-line me-2 text-2xl cursor-pointer hover:text-[28px]"></i>
          <i className="ri-whatsapp-line text-2xl cursor-pointer hover:text-[28px]"></i>
          </div>
        </div>
        <div className="footerRightMenu">
          <span className="copyRight"><i class="ri-at-line"></i>AmanKr. All rights reserved, 2024.</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer