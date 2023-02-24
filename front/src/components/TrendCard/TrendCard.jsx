import React from 'react'
import './TrendCard.css'

import {TrendData} from '../../Data/TrendData.js'
const TrendCard = () => {
  return (
    <div className="TrendCard">
            <h3>Trending</h3>
            {TrendData.map((trend)=>{
                return(
                    <div className="trend">
                        <span>#{trend.name}</span>
                        <span>{trend.likes}k likes</span>
                    </div>
                )
            })}

    </div>
  )
}

export default TrendCard