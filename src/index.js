import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Assignment 2 
import {FavFilm, AboutMe, MyPet} from './FunctionalComponentsAssignment2';
import Clock from './Clock'
import reportWebVitals from './reportWebVitals';
// Ex 1 3
// import AppCity, {AppBook} from './App';

// Ex 2 4
// import AppCity, {AppBook} from './AppClass'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* Assignment 1 */}
    {/* <AppBook /> */}

    {/* Assignment 2.1 */}
    {/* <FavFilm 
        title="The Secret Life of Walter Mitty" 
        director="Ben Stiller" 
        year="2013" 
        company="Samuel Goldwyn Films"/> */}

    {/* Assignment 2.2 */}
    {/* <AboutMe 
        name="Daryna Tokmachova" 
        phoneNumber="+33 6 09 88 43 26" 
        email="darynat@gmail.com" city="Paris" 
        position="Test Automation Engineer" 
        skills="Selenium WebDriver, JUnit, Postman, Rest Assured API, Karate DSL, SQL Developer, Cucumber, TestNG, Page Object Model (POM), IntelliJ, Eclipse, JDBC, Oracle Database, Apache POI, Maven, Jenkins, GitHub, Git, Agile (Scrum)"/> */}

    {/* Assignment 2.3 */}    
    {/* <Clock/> */}

    {/* Assignment 2.4 */}   
    <MyPet 
        name="Kitty" 
        age="12" 
        vision="excellent night vision" 
        hearing="the range of 500 Hz to 32 kHz"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
