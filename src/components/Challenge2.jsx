import React from 'react'
const username="Isha";
const lastname="Narola";
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const withSlashes = [day, month, year].join('/')

var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hours = date.getHours();
const time = [hours, minutes, seconds].join(':')

//for inline css
const heading = {
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
    textShadow: "0px 2px 4px rgb(174, 224, 127)",
    fontFamily: "'Alkatra', cursive"
}


export default function Challenge2() {
  return (
   <>
     <div className='challenge'>
            <h1 style={heading}>Challenge 2:Display The date and Time using React components </h1>
            <h3 contentEditable="true">{`my name is ${username} ${lastname}`}</h3>
            <p>{`Today's date is : ${withSlashes}`}</p>
            <p>{`CurrentTime is : ${time}`}</p>


            <p>Also we can do another way</p>
            <p>{`Today's date is : ${date.toLocaleDateString()}`}</p>
            <p>{`Current time is : ${date.toLocaleTimeString()}`}</p>
        </div>
   </>
  )
}
