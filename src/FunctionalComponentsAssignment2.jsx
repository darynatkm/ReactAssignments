import React, { useState } from 'react';
import props from 'prop-types';
import mitty from './img/mitty.jpg';
import cat from './img/cat.png'
import daryna from './img/DarynaTokmachovaResume.png';
import './App.css';


// Завдання 1
// Створіть додаток «Улюблений фільм», який міститиме інформацію про ваш улюблений фільм:
//  назву фільму, ПІБ режисера, рік випуску, кіностудія, афіша і т. д. 
// Обов'язково використовуйте компоненти та props, функціональні компоненти.
export function FavFilm(props) {
    return (
      <div className="App">
        <header className="App-header">
            <h1>My favorite movie:  {props.title}</h1>
            <p>Directed by  {props.director}</p>
            <p>Released in  {props.year}</p>
            <p>Production company:  {props.company}</p>
            <img src={mitty} alt="walter-mitty-film" width="400" height="500"/>
        </header>
      </div>
    )
}

// Завдання 2
// Створіть додаток «Персональна сторінка», який міститиме інформацію про вас (ПІБ, телефон, email, 
// місто проживання, досвід роботи, навички, фотографію і т. д.). 
// Обов'язково використовуйте компоненти, props, функціональні компоненти.

export function AboutMe(props) {
  return (
    <div className="App">
      <header className="App-header">
          <h1>{props.name}</h1>
          <p>Telephone number: {props.phoneNumber}</p>
          <p>Email address: {props.email}</p>
          <p>City:  {props.city}</p>
          <p>Position:  {props.position}</p>
          <p>Skills:  {props.skills}</p>
          <img src={daryna} alt="myPhoto" width="400" height="500"/>
      </header>
    </div>
  )
}


// Завдання 4
// Створіть додаток «Домашній улюбленець». 
// Додаток відображає інформацію про домашню тваринку (наприклад: кішку, собаку, хом'ячка, тощо). 
// Обов'язково використовуйте компоненти, props, функціональні компоненти.

export function MyPet(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My pet's name: {props.name}</h1>
        <p>Age: {props.age}</p>
        <p>Vision: {props.vision}</p>
        <p>Hearing: {props.hearing}</p>
        <img src={cat} alt="cat" width="400" height="200"/>
      </header>
    </div>
  )
}