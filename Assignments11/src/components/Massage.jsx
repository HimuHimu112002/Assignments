import React from 'react'
import DayOfweek from './DayOfweek'
import PersonCom from './PersonCom'

const Massage = () => {
  return (
    <>
        <DayOfweek dayOfWeek="Monday"/>
        <DayOfweek dayOfWeek="Friday"/>
        <DayOfweek dayOfWeek="Wednesday"/>

        <PersonCom name=" Hello "/>
    </>
  )
}

export default Massage