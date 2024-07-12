import React, { Component } from "react";
import { Product } from './Prouducts'; 
import { Location } from './Locations'; 
import { Person } from './Persons'; 

export class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1 className='text-center'>Products List</h1>
        <Product />
        <hr />
        <hr />
        <hr />
        <h1 className='text-center'>Locations List</h1>
        <Person />

        <hr />
        <hr />
        <hr />
        <h1 className='text-center'>Persons List</h1>
        <Location />
      </div>
    );
  }
}

export default App;
