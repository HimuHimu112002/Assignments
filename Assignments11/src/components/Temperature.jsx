import React from 'react'

const Temperature = () => {
    let result;
    let temperature = 30
    if (temperature > 30) {
        result = "It's hot!" 
    } else {
        result = "It's cool!"
    }
  return (
    <>
       <div>{result}</div>
    </>
  )
}

export default Temperature