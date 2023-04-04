import React from 'react'
import fullname, { favcolor,myname } from './Variableexport';
import * as ques from './Variableexport'

const username = "Isha";
const lastname = "Narola";
//for inline css
const heading = {
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
    textShadow: "0px 2px 4px rgb(174, 224, 127)",
    fontFamily: "'Alkatra', cursive"
}


export default function JsXexpression() {
  return (
 <>
     <div className='challenge'>
            <h1 style={heading}>JSX Expression</h1>
            <p>my name is {username} {lastname}</p>
            <p>my name is {username + " " + lastname}</p>
            <p>{`my name is ${username} ${lastname}`}</p>
            <p>multiplication of two numbers 3*3 is  {3 * 3}</p>
            <p>Random number is {Math.random() * 100}</p>
            <p>Full name is {fullname}</p>
            <p>Fav color is {favcolor}</p>
            <p>My name is {myname()}</p>
            <p>My name is {ques.myname()}</p>
        </div>
 </>
  )
}
