import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts'


const AreaChartComponent = ({data}) => {
  return (
    <ResponsiveContainer width='100%' height={300}>
        <AreaChart data={data} margin={{top:50,left:-20, right:20}}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='date'/>
            <YAxis allowDecimals={false}/>
            <Tooltip/>
            <Area type='monotone' dataKey='count' stroke='#E6009E' fill='#E6A1CF'/>
        </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaChartComponent