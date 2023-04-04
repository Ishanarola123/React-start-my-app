import React from 'react';
import Heading from './Heading';
//challenge 4 and miniproject:1
 //for greeting user
 const username="Isha";
 const hour = new Date().getHours();
 const greetarr = ['Good Morning', 'Good Afternoon', 'Good Night'];
 let greet = "";
 const style = {
     color: "yellow"
 }
 
 if (hour >= 1 && hour < 12) {
     greet = greetarr[0];
     style.color = "green";
 }
 else if (hour >= 12 && hour < 19) {
     greet = greetarr[1];
     style.color = "orange";
 }
 else {
     greet = greetarr[2];
     style.color = "black";
 }
export default function Greet() {
  return (
    <>
   <div className='challenge'>
   <h1 className='heading'>Challenge 4: To make Dynamic Greet to User </h1>
   <div className='greet'>
      <Heading/>
      <p>{`Hello! ${username}`} <span style={style}>{greet}</span> </p>
    </div>
   </div>
  
    </>
  )
}
