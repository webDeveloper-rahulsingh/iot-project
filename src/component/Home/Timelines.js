import React from 'react'

import img1 from '../../assets/TimeLineLogo/Logo1.svg'
import img2 from '../../assets/TimeLineLogo/Logo2.svg'
import img3 from '../../assets/TimeLineLogo/Logo3.svg'
import img4 from '../../assets/TimeLineLogo/Logo4.svg'
import timelineImage from '../../assets/Images/TimelineImage.png'


const data = [
    {
        image: img1,
        heading: 'Leadership',
        subheading: 'Fully committed to the success company'
    },

    {
        image: img2,
        heading: 'Responsibility',
        subheading: 'Students will always be our top priority'
    },

    {
        image: img3,
        heading: 'Flexibility',
        subheading: 'The ability to switch is an important skills'
    },

    {
        image: img4,
        heading: 'Solve the problem',
        subheading: 'Code your way to a solution'
    }
]


export default function Timelines() {
    return (

        <div>
            <div className='flex flex-row gap-15 items-center'>

                <div className='w-[45%] flex flex-col gap-10'>
                    {
                        data.map((content, index) => {

                            return (
                                <div className='flex flex-row gap-6' key={index}>
                                    <div className='w-[50px] h-[50px] bg-white flex items-center'>
                                        <img src={content.image} alt="logo" />
                                    </div>

                                    <div>

                                        <h3>
                                            {content.heading}
                                        </h3>

                                        <p>
                                            {content.subheading}
                                        </p>

                                    </div>
                                </div>

                            )
                        })
                    }
                </div>

                <div className='relative shadow-blue-200'>
                    <img src={timelineImage} alt="" />

                    <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7
                            left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7'>
                            <p className='text-3xl font-bold'>10</p>
                            <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p>
                        </div>

                        <div className='flex gap-5 items-center px-7'>
                            <p className='text-3xl font-bold'>250</p>
                            <p className='text-caribbeangreen-300 text-sm'>TYpe of Courses</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>


    )
}
