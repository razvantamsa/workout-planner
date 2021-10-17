import React from 'react';
import "./Content.css";
import DayTime from "./DayTime";
import Button from "./Button";
import Summary from "./Summary";
import Header from "./Header";

const Content = ({selectedButton, setSelectedButton, days, setSelectDays, activity, options_list}) => {

    //get values for left right buttons
    const defineDirections = (selectedButton) => {
        let index = options_list.indexOf(selectedButton);
        let pr_index = index === 0 ? 0 : index-1;
        let nx_index = index >= options_list.length-1 ? index : index+1;
        return [ options_list[pr_index], options_list[nx_index]];
    }
    const [previous_option, next_option] = defineDirections(selectedButton);


    //update if direction button is pressed
    const onButtonClick = (mode) => {
        setSelectedButton(mode);
    }


    //display a day in content-wrapper
    function ShowDay({selectedButton, days, activity, setSelectDays}){
        return  <div className="daytime-wrapper">
                    <DayTime name="morning" selectedButton={selectedButton} days={days} activity={activity} setSelectDays={setSelectDays}/>
                    <DayTime name="evening" selectedButton={selectedButton} days={days} activity={activity} setSelectDays={setSelectDays}/>
                </div> 
    }

    //display summary in content-wrapper
    function ShowSummary({days}){
        return <Summary days={days}/>
    }

    //decide if day or summary
    function DayOrSummary({selectedButton, days, setSelectDays, activity, options_list}){
        if( options_list.indexOf(selectedButton) == options_list.length-1)
            return <ShowSummary days={days}/>
        return <ShowDay selectedButton={selectedButton} setSelectDays={setSelectDays} days={days} activity={activity} />
    }

    return (
        <div className="Content">
            <DayOrSummary selectedButton={selectedButton} days={days} setSelectDays={setSelectDays} activity={activity} options_list={options_list} />
            <div className="direction-wrapper">
                <Button key={previous_option} navbar={false} directionClass="direction left" option={previous_option} selectedButton={selectedButton} onClick={() => onButtonClick( previous_option)}/>
                <Button key={next_option} navbar={false} directionClass="direction right" option={next_option} selectedButton={selectedButton} onClick={() => onButtonClick( next_option)}/>
            </div>
        </div>
    )
}

export default Content
