import imgKyiv1 from './img/kyiv1.webp';
import imgKyiv2 from './img/kyiv2.jpeg';
import imgKyiv3 from './img/kyiv3.jpeg';
import './App.css';
import React from 'react';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

class AppCity extends React.Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>My city Kyiv</h1>
        <p>Country: Ukraine</p>
        <p>Founded: 495 CE</p>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={imgKyiv1} class="d-block" alt="..." height="500px" width="600px"/>
              </div>
              <div class="carousel-item">
                <img src={imgKyiv2} class="d-block" alt="..." height="500px" width="600px"/>
              </div>
              <div class="carousel-item">
                <img src={imgKyiv3} class="d-block" alt="..." height="500px" width="600px"/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
        </div>
      </header>
    </div>
    );
   
  }
}


export class AppBook extends React.Component {
  render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1>My fav book: The Catcher in the Rye</h1>
            <p>Author: J. D. Salinger</p>
            <p>Genre: 	Realistic fiction, Coming-of-age fiction</p>
            <p>234 Pages</p>
            <p class="text-center">The Catcher in the Rye has been consistently listed as one of the best novels of the twentieth century. </p>
            <p class="text-center"> Shortly after its publication, in an article for The New York Times, Nash K. Burger called it "an unusually brilliant novel".</p>
            <p class="text-center">While James Stern wrote an admiring review of the book in a voice imitating Holden's.</p> 
          </header>
        </div>
      );
  }
}
export default AppCity;
