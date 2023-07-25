import React, {useState} from 'react'
import BarChart from './BarChart'
import AreaChart from './AreaChart'
import {useAppContext} from '../../context/appContext'
import Wrapper from '../wrappers/ChartsContainer'


const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true)
  const {monthlyBookings:data} = useAppContext()
  console.log({monthlyBookings:data});
  return (
    <Wrapper>
      <h4>monthly Bookings</h4>
      <button type='button' onClick={()=>{setBarChart(!barChart)}}>{barChart? 'Bar Chart' : 'Area Chart'}</button>
      {barChart?<BarChart data={data}/> : <AreaChart data={data}/>}      
    </Wrapper>
  )
}

export default ChartsContainer