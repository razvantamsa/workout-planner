import React from 'react'
import "./Summary.css"

const ShowActivities = function({day}) {
    if(day.morning.name === "None" && day.evening.name === "None")
        return <div className="time">Nothing for this day</div>
    if(day.morning.name === "None" && day.evening.name !== "None")
        return <div className="time">{day.evening.from} - {day.evening.to} {day.evening.name}</div>
    if(day.morning.name !== "None" && day.evening.name === "None")
        return <div className="time">{day.morning.from} - {day.morning.to} {day.morning.name}</div>
    if(day.morning.name !== "None" && day.evening.name !== "None")
        return  <div>
                    <div className="time">{day.morning.from} - {day.morning.to} {day.morning.name}</div>
                    <div className="time">{day.evening.from} - {day.evening.to} {day.evening.name}</div>
                </div>
}

const Summary = ({days}) => {
    return (
        <div className="Summary">
            {days.map( day =>
                <div className="day">
                    <div className="name" >{day.name}</div>
                    <ShowActivities day={day}/>
                </div>
             )}
        </div>
    )
}

export default Summary
