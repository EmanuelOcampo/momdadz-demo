import React from 'react'
import Statitem from './Statitem'
import {GiCancel} from 'react-icons/gi'
import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa'
import Wrapper from '../wrappers/StatsContainer'
import { useAppContext } from '../../context/appContext'

const StatsContainer = () => {
    const {stats} = useAppContext()
    const defaultStats = [
        {
          title: 'pending Bookings',
          count: stats.pending || 0,
          icon: <FaSuitcaseRolling />,
          color: '#e9b949',
          bcg: '#fcefc7',
        },
        {
          title: 'accepted Bookings',
          count: stats.accepted || 0,
          icon: <FaCalendarCheck />,
          color: '#647acb',
          bcg: '#e0e8f9',
        },
        {
          title: 'cancelled Bookings',
          count: stats.cancelled || 0,
          icon: <GiCancel />,
          color: '#d66a6a',
          bcg: '#ffeeee',
        },
    ];


  return (
    <Wrapper>
        {defaultStats.map((item,index)=>{
            return <Statitem key={index}{...item}/>
        })}
    </Wrapper>
  )
}

export default StatsContainer