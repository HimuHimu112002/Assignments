import React from 'react'

const Person = () => {
  let isGreeting = false
  return (
    <>

      {isGreeting ? "Hello, World!" : "Goodbye"}
      
    </>
  )
}

export default Person