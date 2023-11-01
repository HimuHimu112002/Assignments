import React from 'react'

const DayOfweek = (props) => {
    let message;

    switch (props.dayOfWeek) {
        case 'Monday':
        message = "It's Monday!";
        break;
        
        case 'Friday':
        message = "It's Friday!";
        break;

        default:
        message = "It's a weekday";
    }
  return (
    <div>{message}</div>
  )
}

export default DayOfweek