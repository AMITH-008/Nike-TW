import React, { useState } from 'react'
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';

const Hero = () => {
  const [currentShoe, setCurrentShoe] = useState(shoes[0].bigShoe)
  return (
    <section 
      id='home'
      className='border-2 border-red-500 w-full p-2 flex flex-col xl:flex-row min-h-screen max-container justify-center gap-16'
    >
      <div className='relative xl:w-2/5 flex flex-col w-full pt-28 max-xl:padding-x justify-center items-start'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Winter Collection
        </p>
        <h1 className='mt-10 text-8xl font-palanquin max-sm:text-[72px] max-sm:leading-[82] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>Our New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike </span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort and innovation for your active life
        </p>
        <Button label="Shop Now" iconURL={arrowRight}/>
        <div className=' 
          flex 
          justify-start 
          items-start
          flex-wrap
          w-full
          mt-20
          gap-16
          '>
            {statistics.map((stat,index) => (
              <div  key={index}>
                <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
                <p className='leading-7 font-montserrat text-slate-gray'>
                  {stat.label}
                </p>
              </div>
            ))}

        </div>
      </div>
      <div className='relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img 
          src={currentShoe} 
          alt="shoe collection"
          width={610}
          height={500}
          className='relative z-10'
        />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[8%] sm:left-[10%] max-sm:px-6'>
          {
            shoes.map(shoe => (
              <div key={shoe}>
                <ShoeCard 
                imgURL={shoe}
                changeBigShoeImage= {(newShoe) => {setCurrentShoe(newShoe)}}
                bigShoeImg={currentShoe}
                />
              </div>
            ))
          }
        </div>
      </div>       
    </section>
  )
}

export default Hero