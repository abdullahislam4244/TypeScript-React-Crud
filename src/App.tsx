import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
      id: number
      name: string
      age: number
      img: string
      note?: string
  }[]
}


function App() {

  const [people, setPeople] = useState<IState["people"]>([])

  return (
    <div className="App">
      <h1>Person Info Crud Application</h1>
      <List people={people} setPeople = {setPeople}/>
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App;
