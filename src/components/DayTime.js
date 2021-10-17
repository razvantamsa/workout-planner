import React, {useState} from 'react';
import "./DayTime.css";

const DayTime = ({name, selectedButton, days, setSelectDays, activity}) => {

    //define an array to hold all possible hours to be selected
    let time = [];
    for(let i=0; i<24; i++){
        if(i < 10){
            time.push("0" + i + ":00");
        }
        else time.push(i+":00")
    }

    //get needed variables
    var [selected_day] = days.filter(day => day.name == selectedButton);
    let index = days.findIndex( day => day.name === selectedButton)

    //useState to update selected option in real time
    const [thisActivity, setActivity] = useState(selected_day[name].name);
    const [thisFrom, setFrom] = useState(selected_day[name].from);
    const [thisTo, setTo] = useState(selected_day[name].to);

    //handle functions to treat onChange
    const handleActivity = function(new_activity){
        selected_day[name].name = new_activity;
        days[index] = selected_day;
        setSelectDays(days);
        setActivity(new_activity);
    }
    const handleFrom = function(new_from){
        selected_day[name].from = new_from;
        days[index] = selected_day;
        setSelectDays(days);
        setFrom(new_from);
    }
    const handleTo = function(new_to){
        selected_day[name].to = new_to;
        days[index] = selected_day;
        setSelectDays(days);
        setTo(new_to);
    }

    return (
        <div className="DayTime">
            <p className="name">{name} </p>
            <form>
                <div className="form-group">
                    <label htmlFor="activity">Activity: </label>
                    <select className="form-control" name="activity" value={thisActivity} onChange={(e) => handleActivity(e.target.value) }>
                        {activity.map( (act) => <option key={act} value={act} >{act}</option> )}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="from">From: </label>
                    <select className="form-control" name="from" value={thisFrom} onChange={(e) => handleFrom(e.target.value)}>
                        {time.map( (hour) => <option key={hour} value={hour}>{hour}</option> )}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="to">To: </label>
                    <select className="form-control" name="to" value={thisTo} onChange={ (e) => handleTo(e.target.value)}>
                        {time.map( (hour) => <option key={hour} value={hour}>{hour}</option> )}
                    </select>
                </div>

            </form>
        </div>
    )
}

export default DayTime
