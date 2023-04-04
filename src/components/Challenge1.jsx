import React from 'react'
//for inline css
const heading = {
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
    textShadow: "0px 2px 4px rgb(174, 224, 127)",
    fontFamily: "'Alkatra', cursive"
}

export default function Challenge1() {
  return (
    <>
    <div className='challenge'>
           <h1 style={heading}>Challenge 1:Display the List using components</h1>
           <p>List of 5 Best Series</p>
           <ol>
               <li>Dark</li>
               <li>Extra curricular</li>
               <li>My Holo Love</li>
               <li>My first-2 Love</li>
               <li>Mr Robot</li>
           </ol>
       </div>
 </>
  )
}
