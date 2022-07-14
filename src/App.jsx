import React from 'react'
import './App.css';
import morning from './images/morning.jpg';
import noon from './images/noon.jpg'
import evening from './images/evening.jpg'
import night from './images/night.jpg'

let morningImage = morning;
let noonImage = noon;
let eveningImage = evening;
let nightImage = night;
let bgimage;
let today = new Date();
let hours = today.getHours();
let hour = hours > 12 ? hours - 12 : hours;
let minutes = today.getMinutes().toString().length == 1 ? '0' + today.getMinutes().toString() : today.getMinutes().toString();
let date = today.getDate().toString();
let month = (today.getMonth() + 1).toString();
let year = today.getFullYear().toString().slice(2);
let ampm = hours > 12 ? 'PM' : 'AM';
let message;

if (hours >= 4 && hours < 12){ message = 'morning'; bgimage = morningImage;}
else if(hours >= 12 && hours < 17) { message = 'afternoon'; bgimage = noonImage;}
else if(hours >= 17 && hours < 20) { message = 'evening'; bgimage = eveningImage;}
else { message = 'night'; bgimage = nightImage;}

function App() {
  return (
    <>
    <div className="bg-image">
      <img src={bgimage}/>
    </div>
    <div className="main">
      <h1>{hour}:{minutes} <span>{ampm}</span></h1>
      <h3>{`Good ${message}`}</h3>
      <h4>{date}/{month}/{year}</h4>
    </div>
  </>
  )
}

export default App