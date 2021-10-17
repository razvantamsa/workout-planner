import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


function App() {

    let Part = function(name) {
        this.name = name;
        this.from = "00:00";
        this.to = "00:00";
    }

    let Day = function (name){
        this.name = name;
        this.morning = new Part("None");
        this.evening = new Part("None"); 

    } 

    let _days = []

    let options_list = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Summary"];
    let activity = ["None", "Jogging", "Karate", "Tennis", "Swimming", "Football", "Handball", "Volleyball"];

    for(let i=0; i<options_list.length-1; i++){
        _days.push(new Day(options_list[i]));
    }

    const [selectedButton, setSelectedButton] = useState("Monday");

    const [days, setSelectDays] = useState(_days);

    console.log(days);

    return (
        <div className="App">
            <Header selectedButton={selectedButton} setSelectedButton={setSelectedButton} options_list={options_list}/>
            <Content selectedButton={selectedButton} setSelectedButton={setSelectedButton} setSelectDays={setSelectDays} days={days} activity={activity} options_list={options_list}/>
        </div>
    );
}

export default App;
