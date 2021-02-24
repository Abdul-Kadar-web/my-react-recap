import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const nayoks = ['Jasim', 'Dipjol', 'BappaRaz']
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      <Nayok name={nayoks[0]} movie="5" age="51"></Nayok>
      <Nayok name="Sakib khan" movie="2" age="35"></Nayok>
      <Nayok name={nayoks[2]} movie="7" age="45"></Nayok>
      <Nayok name="Bappa Raz" movie="6"></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function MovieCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return(
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>No of Movies: {count}</h3>
      <MovieDisplay movies = {count}></MovieDisplay>
      <MovieDisplay movies = {count + 10}></MovieDisplay>
      <MovieDisplay movies = {count + 5}></MovieDisplay>
      <MovieDisplay movies = {count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props) {
  return <h4>Movies I have acted: {props.movies}</h4>
}

function Nayok(props) {
  const nayokStyle = {
    border: '2px solid red',
    margin: '20px'
  }
  return (
    <div style={nayokStyle}>
      <h1>{props.name}</h1>
      <h2>Movie: {props.movie}</h2>
      <h3>age: {props.age || 40}</h3>
    </div>
  )
}

export default App;
