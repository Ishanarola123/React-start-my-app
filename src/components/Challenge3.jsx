import React from 'react'


const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/300/300";
const img3 = "https://picsum.photos/300/400";
const link1 = "https://picsum.photos/";


export default function Challenge3() {
  return (
    <>
      <div className='challenge'>
        <h1 className='heading'>Challenge 3: To make The Image Gallary with Components</h1>
        <div className='img_div '>
          <img src={img1} alt='Random images' />
          <img src={img2} alt='Random images' />
          <a href={link1} target='_'><img src={img3} alt='Random images' /> </a>
        </div>
      </div>
    </>
  )
}
