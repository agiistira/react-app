import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    const daftarAngka = [1, 2, 3, 4, 5];
    
    return (
      <div className="App">
        <header className="App-header">
          {
           daftarAngka.map((elemen, index) => {
             return (
               <div>
               <h1>Elemen ke - {index}</h1>
               <p>{elemen}</p>
               </div>
             )
           })
          }
        </header>
      </div>
    );
  }
}

export default App;