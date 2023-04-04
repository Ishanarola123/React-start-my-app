import React from 'react'
import add from './Calculator'
import * as que from './Calculator'

export default function MainCal() {
  return (
    <>
    <div className='challenge'>
    <h1 className='heading'>Challenge 5: To make Calculator with components </h1>
    <p> The sum of two number is here:{add(10,20)}</p>
    <p> The sub of two number is here:{que.sub(10,20)}</p>
    <p> The mul of two number is here:{que.mul(10,20)}</p>
    <p> The divsion of two number is here:{que.div(20,10)}</p>
    <p> The divsion of two number is here:{que.div(10,20)}</p>
    </div>
  
    </>
  )
}
