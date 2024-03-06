import React from 'react'
import Alternate from '../components/Layout/Toodoo';
import MyCalender from "../components/Calender/AdvancedCalender"
import Card from '../components/Calender/Card';

const MyEvents = () => {
  return (
    <Alternate>
        <div>

              <MyCalender/>
        </div>
    <br/><br/>
    <div className='flex flex-wrap '>
      {/* <Card/> */}
    </div>

    </Alternate>
  )
}

export default MyEvents