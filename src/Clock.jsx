import React from 'react';


// Завдання 3
// Реалізуйте додаток, що відображає поточний час з точністю до секунди. 
// Обов'язково використовуйте компоненти, props, функціональні компоненти.

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date
    }
    this.update = this.update.bind(this);
  }
  update() {
    this.setState({date: new Date});
  } 
  componentDidMount() {
    this.update = setInterval(this.update, 1000);
  }
  render() {
    return (
    <div className="App">
        <header className="App-header">
            <h1 style={{fontSize: 100}}>{this.state.date.toLocaleString().substring(this.state.date.toLocaleString().indexOf(',')+1)}</h1>
        </header>
      </div>
    );
  }
}
export default Clock;