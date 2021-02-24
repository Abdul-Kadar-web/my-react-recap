import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [nayoks , setNayoks] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))
  }, [])

  // eta alada load hoi but apadoto dekhanor jonno eta k off kore data load kore dekhano hoise
  // const nayoks = [{name: 'Jasim', age: 56}, {name: 'Dipjol', age: 61}, {name: 'BappaRaz', age: 15}, {name:'Omar Sani', age: 25}]

  return (
    <div className="App">
      <MovieCounter></MovieCounter>

      {/* eta k ek line a kora hoise */}
      {
        // nayoks.map(nayok => <Nayok name={nayok.name} age={nayok.age}></Nayok>)

        // key ta bosano hoi coz uniquity bujanor jonno jate kono jamela na hoi 
        // eta fetch er sathe milai kore data load korse
        nayoks.map(nayok => <Nayok name={nayok.name} key={nayok.id} email={nayok.email}></Nayok>)
      }

      {/* <Nayok name={nayoks[0]} movie="5" age="51"></Nayok>
      <Nayok name="Sakib khan" movie="2" age="35"></Nayok>
      <Nayok name={nayoks[2]} movie="7" age="45"></Nayok>
      <Nayok name="Bappa Raz" movie="6"></Nayok> */}

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
      <h2>Email: {props.email}</h2>
    </div>
  )
}

export default App;
