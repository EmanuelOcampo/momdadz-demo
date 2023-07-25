import React from 'react'
import { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
import { StatsContainer, Loading, ChartsContainer } from '../../assets/components'

const Stats = () => {
  const {showStats, isLoading, monthlyBookings} = useAppContext()

  useEffect(()=>{
    showStats()
    // eslint-disable-next-line
  }, [])

  if (isLoading) {
    return <Loading center/>
    
  }


  return (
    <>
    <StatsContainer/>
    {monthlyBookings.length > 0 && <ChartsContainer /> }
    </>
  )
}

export default Stats