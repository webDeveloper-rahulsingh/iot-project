import React from 'react'


import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
// import { SiGmail } from 'react-icons/Si'

import FooterLink2 from '../../data/footer-links'

import { Link } from 'react-router-dom'


const Footer = () => {

  const company = ["About", "Careers", "Affilates"];

  const Resources = ["Articles", "Blogs", "Chart Sheet", "code challenges", "Docs", "Projects", "Videos", "Workspaces"];

  const Support = ["Help Center"];

  const plans = ["Paid memberships", "For students", "Business solution"];

  const community = ["Forums", "Chapters", "Events"];

  const bottomFooter = ["Privacy Policy" , "Cookie Policy" , "Terms"]

  return (

   <div className='bg-richblack-800'>
    <div className='flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14'>

      <div className='border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700'>

        {/* section1 */}
        <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
          
          {/* subsection1 */}
          <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
            {/* flex row */}
            <img src="" alt=""  className="object-contain"/>

            <h2 className="text-richblack-50 font-semibold text-[16px]">Company</h2>
            <div  className="flex flex-col gap-2">
              {
                company.map((element, index) => {

                  return (
                    <div key={index}   className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                      {element}
                    </div>
                  )
                })
              }
            </div>

            {/*  flex - col */}
            <div className="flex gap-3 text-lg">
              <FaLinkedin />
              <FaWhatsapp />
              <FaInstagram />
            </div>
          </div>


          {/* subsection2 */}
          <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
           
              <h2 className="text-richblack-50 font-semibold text-[16px]">Resources</h2>

              <div className="flex flex-col gap-2 mt-2">
              {
                Resources.map((ele, index) => {

                  return (
                    <div key={index}
                    className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                      {ele}
                    </div>

                  )
                })

              }

            </div>


           
              <h2  className="text-richblack-50 font-semibold text-[16px] mt-7">Support</h2>
              <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
              {
                Support.map((ele, index) => {
                  return (
                    <div key={index}>
                      {ele}
                    </div>
                  )
                })

              }
            </div>
          </div>


          {/* subsection3 */}

          <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
          
              <h2 className="text-richblack-50 font-semibold text-[16px]">Plans</h2>
            <div className="flex flex-col gap-2 mt-2">
               {
                plans.map((ele, index) => {
                  return (
                    <div key={index}
                    className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      {ele}
                    </div>
                  )
                })
              }

            </div>


           
              <h2 className="text-richblack-50 font-semibold text-[16px] mt-7">Community</h2>
              <div className="flex flex-col gap-2 mt-2">
              {
                community.map((ele, index) => {
                  return (
                    <div key={index} className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                      {ele}
                    </div>
                  )
                })
              }

            </div>
          </div>




        </div>

        {/* section2 */}
        <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
          {
            FooterLink2.map((ele, index) => {
              return (
                <div key={index} className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">

                  <h2 className="text-richblack-50 font-semibold text-[16px]">{ele.title}</h2>

                  <div className="flex flex-col gap-2 mt-2">
                    {
                      ele.links.map((element, ind) => {
                        return (
                          <div key={ind}
                          className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                            {element.title}
                          </div>
                        )
                      })
                    }
                  </div>

                </div>
              )
            })
          }

        </div>
      </div>
    </div>
    
    <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-14 text-sm">
        {/* Section 1 */}
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">
            {bottomFooter.map((ele, i) => {
              return (
                <div
                  key={i}
                  className={` ${
                    bottomFooter.length - 1 === i
                      ? ""
                      : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  } px-3 `}
                >
                  <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                    {ele}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center">
          
          </div>
        </div>
      </div>



  </div>
  )
}

export default Footer
